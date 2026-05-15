import { CreateInboxCard } from "../../../../../elements/admin/CreateInboxCard.js";

const SectionContent = 
        `<div class="inbox_block">
            <div class="inbox_container admin_home_container">
                <div class="inbox_content">
                    <div class="inbox_grid">

                        ${CreateInboxCard(1, 'John Doe', 'A solicitat rezervarea mașinii Dodge Viper GTS', '2025-06-07', 'Acum 2 ore', 'C', 'https://bwidehzltapvmubhedpe.supabase.co/storage/v1/object/public/user-profile//user2.png')}
                        ${CreateInboxCard(2, 'Jane Smith', 'A întrebat despre disponibilitatea mașinii Tesla Model S', '2025-06-06', 'Acum 1 zi', 'U', 'https://bwidehzltapvmubhedpe.supabase.co/storage/v1/object/public/user-profile//user2.png')}
                        ${CreateInboxCard(3, 'Alice Johnson', 'A solicitat informații despre prețurile de închiriere', '2025-06-04', 'Acum 3 zile', 'C', 'https://bwidehzltapvmubhedpe.supabase.co/storage/v1/object/public/user-profile//user2.png')}
                        ${CreateInboxCard(4, 'Bob Brown', 'A întrebat despre politica de anulare a rezervărilor', '2025-06-02', 'Acum 5 zile', 'U', 'https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')}
                        ${CreateInboxCard(5, 'Charlie Green', 'A solicitat detalii despre asigurarea mașinii', '2025-05-30', 'Acum 1 săptămână', 'C', 'https://bwidehzltapvmubhedpe.supabase.co/storage/v1/object/public/user-profile//user2.png')}

                    </div>
                </div>
            </div>
        </div>`;

export const InboxListSection = SectionContent;