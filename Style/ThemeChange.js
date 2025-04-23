function ChangeTheme(mode) {
    
    for (element of allElements) {

        if (mode == 'Light Mode') {
            element.classList.remove("dark-mode");
        }else if (mode == 'Dark Mode') {
            element.classList.add("dark-mode");
        }
        
    }

}

const allElements = document.querySelectorAll('*');
const lis = document.querySelector('.dropdown-menu').children;

for (li of lis) {
    const mode = li.textContent;

    li.addEventListener('click', () => {

        ChangeTheme(mode);

    });

}