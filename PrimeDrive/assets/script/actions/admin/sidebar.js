const navIcons = document.querySelectorAll('.admin_d_icon_side_menu_item');

const navLists = document.querySelectorAll('.admin_d_link_side_menu_list');

navIcons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        navLists.forEach(list => {
            list.style.display = 'none';
        });
        navLists[index].style.display = 'grid';
    });
});