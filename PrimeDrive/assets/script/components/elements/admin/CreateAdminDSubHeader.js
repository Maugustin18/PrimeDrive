export function CreateAdminDSubHeader(title, button) {
    return `
        <div class="admin_d_header admin_d_header_cars">
            <p class="smaller_section_title">${title}</p>
            ${button ? button : ''}
        </div>
    `;
} 