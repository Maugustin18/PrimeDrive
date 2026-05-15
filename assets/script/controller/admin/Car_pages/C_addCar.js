import { addCar, addModel, getBrands, getModels, uploadPhotos } from "../../../app/admin/data/car/add-car-app.js";
import { CreateAddedPhotoCard } from "../../../components/elements/admin/CreateAddedPhotoCard.js";
import { addAlert } from "../../../actions/global/alert.js";
import { getCar } from "../../../app/admin/data/car/view-car-app.js";
import { getCarPhotosInfo, updateCar, updateCarPhotos } from "../../../app/admin/data/car/edit-car-app.js";
import { setURLPath } from "../../../functions/global/URLPosition.js";

// 
export const brands = await getBrands();
export const models = await getModels();

const modelSelection = document.querySelector("#modelSelect");
const brandSelection = document.querySelector("#brandSelect");

brands.forEach(brand => {
    const option = document.createElement("option");
    option.value = brand.id;
    option.textContent = brand.name;
    brandSelection.appendChild(option);
});

models.forEach(model => {
    const option = document.createElement("option");
    option.value = model.id;
    option.textContent = `${brands[(model.brand)-1].name} ${model.name}`;
    modelSelection.appendChild(option);
});




// ADD PHOTOS
const uploadImgBtn = document.querySelector("#uploadImgBtn");
const uploadInput = document.querySelector("#uploadInput");
const uploadedImgGrid = document.querySelector(".uploaded_img_grid");

let photos = [];

uploadImgBtn.addEventListener("click", (e) => {
   e.preventDefault();
   uploadInput.click();
});

uploadInput.addEventListener("change", (e) => {
    const noFilesChosen = document.querySelector("#noFilesChosen");

    if( uploadInput.files.length > 0) {
        noFilesChosen.style.display = "none";
    } else {
        noFilesChosen.style.display = "block";
    }

    const newFiles = Array.from(uploadInput.files);

    const uniqueNewFiles = newFiles.filter(newFile => {
        return !photos.find(existingFile =>
            existingFile.name === newFile.name && existingFile.size === newFile.size
        );
    });


    photos.push(...uniqueNewFiles);

    uniqueNewFiles.forEach(file => {
        const reader = new FileReader();
        reader.onload = function (e) {
            const newPhotoCard = CreateAddedPhotoCard(e.target.result, file.name, parseInt(file.size /1024));
            const photoCard = document.createElement("div");
            photoCard.innerHTML = newPhotoCard;

            const deleteBtn = photoCard.querySelector(".delete_upload_img_btn");
            deleteBtn.addEventListener("click", () => {
                photos = photos.filter(f => !(f.name === file.name && f.size === file.size));
                uploadedImgGrid.removeChild(photoCard);
                if( photos.length > 0) {
                    noFilesChosen.style.display = "none";
                } else {
                    noFilesChosen.style.display = "block";
                }
            });

            uploadedImgGrid.appendChild(photoCard);
        }
        reader.readAsDataURL(file);
    });

   
  
   console.log(uniqueNewFiles);
});





const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const edit = urlParams.get('edit');


const finishStageBtn = document.querySelector("#finishStageBtn");

const modelSelect = document.querySelector("#modelSelect");
const availabilitySelect = document.querySelector("#availabilitySelect");

const brandSelect = document.querySelector("#brandSelect");
const modelNameInput = document.querySelector("#modelNameInput");

const fuelSelect = document.querySelector("#fuelSelect");
const transmissionSelect = document.querySelector("#transmissionSelect");
const doorsInput = document.querySelector("#doorsInput");
const seatsInput = document.querySelector("#seatsInput");
const ratingInput = document.querySelector("#ratingInput");
const yearInput = document.querySelector("#yearInput");
const priceInput = document.querySelector("#priceInput");

const featuresTextarea = document.querySelector("#featuresTextarea");



const carNameSpan = document.querySelector("#carNameSpan");


if (edit === "true") {
//  EDIT CAR
    const carId = urlParams.get('id');
    const carData = await getCar(carId);
    console.log(carId)
    console.log(carData);
    carNameSpan.textContent = `${carData.brand.name} ${carData.model.name}`;


    modelSelect.value = carData.modelId;
    availabilitySelect.value = carData.availability;
    brandSelect.value = carData.brand.id;
    modelNameInput.value = carData.model.name;
    fuelSelect.value = carData.fuel;
    transmissionSelect.value = carData.transmission;
    doorsInput.value = carData.doors;
    seatsInput.value = carData.seats;
    ratingInput.value = carData.rating;
    yearInput.value = carData.year;
    priceInput.value = carData.price;
    featuresTextarea.value = carData.features.join(", ");

    // const photos = await getCarPhotos(carId);
    photos = await getCarPhotosInfo(carId);
    noFilesChosen.style.display = "none";

    photos.forEach(file => {
        const newPhotoCard = CreateAddedPhotoCard(file.publicUrl, file.name, parseInt(file.size /1024));
        const photoCard = document.createElement("div");
        photoCard.innerHTML = newPhotoCard;

        const deleteBtn = photoCard.querySelector(".delete_upload_img_btn");
        deleteBtn.addEventListener("click", () => {
            photos = photos.filter(f => !(f.name === file.name && f.size === file.size));
            uploadedImgGrid.removeChild(photoCard);
            if( photos.length > 0) {
                noFilesChosen.style.display = "none";
            } else {
                noFilesChosen.style.display = "block";
            }
        });

        uploadedImgGrid.appendChild(photoCard);
       
    });




    finishStageBtn.addEventListener("click", async () => {
        const carNewData = {
            model: modelSelect.value,
            availability: availabilitySelect.value,
            fuel: fuelSelect.value,
            transmission: transmissionSelect.value,
            doors: doorsInput.value,
            seats: seatsInput.value,
            rating: ratingInput.value,
            year: yearInput.value,
            price: priceInput.value,
            features: featuresTextarea.value.split(",").map(item => item.trim()),
        };

        if (modelSelect.value && availabilitySelect.value &&
            fuelSelect.value && transmissionSelect.value && doorsInput.value && seatsInput.value &&
            ratingInput.value && yearInput.value && priceInput.value) {
                if(photos.length === 0) {
                    addAlert('AD-A-0001');
                } else {
                    if(modelSelect.value === "-1") {
                        if( brandSelect.value && modelNameInput.value){
                            try {
                                const modelId = await addModel({
                                    brand: brandSelect.value,
                                    name: modelNameInput.value,
                                });
                                carNewData.model = modelId;
                                await updateCar(carId, carNewData);
                                await updateCarPhotos(carId, photos);
                                addAlert('AD-A-0000');
                                console.log("Car ready");
                                // window.location.href = `${setURLPath()}pages/admin/dashboard/data/cars/view-car.html?id=${carId}`;
                            } catch (err) {
                                console.log(err);
                            }
                        } else {
                            addAlert('FM-D-0000');
                        }
                        
                    } else {
                        try {
                            await updateCar(carId, carNewData);
                             await updateCarPhotos(carId, photos);
                            console.log("Car ready");
                            addAlert('AD-A-0000');
                            // window.location.href = `${setURLPath()}pages/admin/dashboard/data/cars/view-car.html?id=${carId}`;
                        } catch (err) {
                            console.log(err);
                        }
                    }
                }
        } else {
            addAlert('FM-D-0000');
        }
    });


} else {
//  ADD CAR
    carNameSpan.textContent = `Adugă mașină`;
    console.log("Add car page");
    finishStageBtn.addEventListener("click", async () => {
        const carData = {
            model: modelSelect.value,
            availability: availabilitySelect.value,
            fuel: fuelSelect.value,
            transmission: transmissionSelect.value,
            doors: doorsInput.value,
            seats: seatsInput.value,
            rating: ratingInput.value,
            year: yearInput.value,
            price: priceInput.value,
            features: featuresTextarea.value.split(",").map(item => item.trim()),
        };

        if (modelSelect.value && availabilitySelect.value &&
            fuelSelect.value && transmissionSelect.value && doorsInput.value && seatsInput.value &&
            ratingInput.value && yearInput.value && priceInput.value) {
                if(photos.length === 0) {
                    addAlert('AD-A-0001');
                } else {
                    if(modelSelect.value === "-1") {
                        if( brandSelect.value && modelNameInput.value){
                            try {
                                const modelId = await addModel({
                                    brand: brandSelect.value,
                                    name: modelNameInput.value,
                                });
                                carData.model = modelId;
                                const carId = await addCar(carData);
                                await uploadPhotos(photos, carId)
                                addAlert('AD-A-0000');
                                console.log("Car ready");
                                // window.location.href = `${setURLPath()}pages/admin/dashboard/data/cars/view-car.html?id=${carId}`;
                            } catch (err) {
                                console.log(err);
                            }
                        } else {
                            addAlert('FM-D-0000');
                        }
                        
                    } else {
                        try {
                            const carId = await addCar(carData);
                            await uploadPhotos(photos, carId)
                            console.log("Car ready");
                            addAlert('AD-A-0000');
                            // window.location.href = `${setURLPath()}pages/admin/dashboard/data/cars/view-car.html?id=${carId}`;
                        } catch (err) {
                            console.log(err);
                        }
                    }
                }
        } else {
            addAlert('FM-D-0000');
        }
    });
}