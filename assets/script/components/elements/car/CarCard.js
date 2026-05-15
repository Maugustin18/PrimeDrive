import { setURLPath } from "../../../functions/global/URLPosition.js";

export function CreateCarCard(id, carName, year, transmission, taxPerKm, seats, img, rating, reviewsNr, doors, fuel) {
    let stars = ``;

    for(let i = 0; i < Math.round(rating); i++){
        stars += 
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>`
    }

    for(let i = Math.round(rating); i < 5; i++){
        stars += 
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
            </svg>`
    }

    // return (
    //     `<div class="car_card">
    //         <div class="car_card_bg"></div>
    //         <div class="car_card_header">
    //             <img src="../assets/media/img/cars/${car.id}.jpg" alt="">
    //         </div>
    //         <div class="car_card_body">
    //             <div class="car_name">
    //                 <a href="./car.html?id=${car.id}" class="orange_hover bold_p smaller_section_title">${car.model} (${car.year})</a>
    //             </div>
    //             <div class="car_details_list">
    //                 <div class="car_details_l_item">
    //                     <div class="car_details_l_i_name">Transmission: </div>
    //                     <div class="car_details_l_i_data">${car.transmission}</div>
    //                 </div>
    //                 <div class="car_details_l_item">
    //                     <div class="car_details_l_i_name">Per KM:</div>
    //                     <div class="car_details_l_i_data">${car.taxPerKm}</div>
    //                 </div>
    //                 <div class="car_details_l_item">
    //                     <div class="car_details_l_i_name">Passengers:</div>
    //                     <div class="car_details_l_i_data">${car.seats}</div>
    //                 </div>
    //                 <div class="car_details_l_item">
    //                     <div class="car_details_l_i_name">Rating:</div>
    //                     <div class="car_details_l_i_data">
    //                         <div class="car_card_rating">
    //                             ${stars}
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         <div class="car_card_footer">
    //             <a href="./car.html?id=${car.id}" class="round_btn capitalise orange_btn">
    //                 Detalii
    //                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    //                     <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
    //                 </svg>
    //             </a>
    //         </div>
    //     </div>`
    // );

    return (
        `<div class="car_card">
            <div class="car_card_header">
                <img src="${img}" alt="">
            </div>
            <div class="car_card_body">
                <div class="car_card_year">Modelul anului ${year}</div>
                <div class="car_card_body_review">
                    <div class="car_card_body_review_stars">
                        ${stars}
                    </div>
                    <div class="car_card_body_review_data capitalise">${reviewsNr} recenzii</div>
                </div>
                <div class="car_card_body_model">
                    <p class="">
                        <a href="${setURLPath()}pages/car.html?id=${id}">${carName}</a>
                    </p>
                </div>
                <div class="car_card_body_price">
                    <p><span>$${taxPerKm}</span> / Zi</p>
                </div>
                <div class="car_card_body_para_grid">
                    <div class="car_card_body_para">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                        </svg>
                        <p>${seats} locuri</p>
                    </div>
                    <div class="car_card_body_para">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon line-color" stroke="">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                            <g id="SVGRepo_iconCarrier">

                            <path id="secondary" d="M17,12H7m5,3V9m5,6V9M7,15V9" style="fill: none; stroke: #000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"/>

                            <rect id="primary" x="4" y="3" width="16" height="18" rx="1" transform="translate(24) rotate(90)" style="fill: none; stroke: #000000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"/>

                            </g>
                        </svg>
                        <p>${transmission}</p>
                    </div>
                    <div class="car_card_body_para">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12.29,3.29,20,11v4.13a1,1,0,0,1-.86,1l-2.06.3A6.11,6.11,0,0,0,12,21H5a1,1,0,0,1-1-1V4A1,1,0,0,1,5,3h6.59A1,1,0,0,1,12.29,3.29ZM20,11H4m4,4h2" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 1;"></path>
                        </svg>
                        <p>${doors} uși</p>
                    </div>
                    <div class="car_card_body_para">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path d="M3.5 2a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5zM4 14V9h1.796q.75 0 1.237.293t.725.85Q8 10.7 8 11.487q0 .792-.242 1.355a1.8 1.8 0 0 1-.732.861Q6.54 14 5.796 14zm1.666-4.194h-.692v3.385h.692q.343 0 .595-.103a1 1 0 0 0 .412-.315q.162-.213.241-.528.084-.314.083-.74 0-.565-.144-.94a1.1 1.1 0 0 0-.436-.569q-.293-.19-.75-.19Z"/>
                            <path d="M3 0a2 2 0 0 0-2 2v13H.5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1H11v-4a1 1 0 0 1 1 1v.5a1.5 1.5 0 0 0 3 0V8h.5a.5.5 0 0 0 .5-.5V4.324c0-.616 0-1.426-.294-2.081a1.97 1.97 0 0 0-.794-.907Q14.345.999 13.5 1a.5.5 0 0 0 0 1c.436 0 .716.086.9.195a.97.97 0 0 1 .394.458c.147.328.19.746.201 1.222H13.5a.5.5 0 0 0-.5.5V7.5a.5.5 0 0 0 .5.5h.5v4.5a.5.5 0 0 1-1 0V12a2 2 0 0 0-2-2V2a2 2 0 0 0-2-2zm7 2v13H2V2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1"/>
                        </svg>
                        <p>${fuel}</p>
                    </div>
                </div>
                <div class="car_link">
                    <a href="${setURLPath()}pages/car.html?id=${id}" class="round_btn capitalise orange_btn">
                        Detalii
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>`
    )
}

