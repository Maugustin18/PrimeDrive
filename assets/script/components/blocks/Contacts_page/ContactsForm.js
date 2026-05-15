const ContactsFormContent = 
            `<div class="contacts_content_col_form">
                <div class="contacts_form_container">
                    <div class="background_envelope">
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
                            <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882zM15 7.383l-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765z"/>
                        </svg>
                    </div>
                    <form action="" method="GET" id="contactForm">
                        <div class="contact_form_input_group">    
                            <input class="middle_radius_input grey_input" type="text" name="name" id="nameInput" placeholder="Numele" required>
                            <input class="middle_radius_input grey_input" type="email" name="email" id="emailInput" placeholder="Email" required>
                            <input class="middle_radius_input grey_input" type="text" name="subject" id="subjectInput" placeholder="Subiect" required>
                            <textarea class="middle_radius_input grey_input" name="message" id="contentInput" placeholder="Mesaj" required></textarea>
                        </div>
                        
                        <button type="button" id="submitBtn" class="round_btn capitalise orange_btn">
                            Trimite
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>`;

export const ContactsForm = ContactsFormContent;