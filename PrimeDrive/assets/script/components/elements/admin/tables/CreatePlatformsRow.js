export function CreatePlatformsRow(index, name, sessions, percent) {
    return `
        <div class="admin_table_row platforms_row admin_table_body_row">
            <div class="platforms_cell">
                <p>${index}</p>
            </div>
            <div class="platforms_cell">
                <p>${name}</p>
            </div>
            <div class="platforms_cell">
                <p>${sessions}</p>
            </div>
            <div class="platforms_cell">
                <p>${percent}%</p>
            </div>
        </div>`;
}