export function CreateAddedPhotoCard(imageSrc, fileName, fileSize) {
    return `
        <div class="uploaded_img_row">
            <div class="uploaded_img_row_container">
                <img src="${imageSrc}" alt="">
                <p class="img_name">${fileName}</p>
                <p class="img_size">${fileSize}KB</p>
            </div>
            <div class="delete_upload_img_block">
                <button class="delete_upload_img_btn" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </button>
            </div>
        </div>
    `;
}