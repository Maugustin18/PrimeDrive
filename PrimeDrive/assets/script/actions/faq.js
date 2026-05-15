const faqs = document.querySelectorAll(".faq_q_block");

faqs.forEach((faq, index)=>{
    const faqHeader = faq.querySelector(".faq_q_block_header");
    const faqHeaderSvg = faqHeader.querySelector(".faq_q_block_header_arrow>svg");

    faqHeader.addEventListener('click', ()=>{
        faqs.forEach((e, eIndex)=>{
            index == eIndex ? 
                e.setAttribute('class', 'faq_q_block active_faq_q') 
                    : 
                e.setAttribute('class', 'faq_q_block');
        });
    });

});