document.addEventListener('DOMContentLoaded', function () {
    // botón para cambiar noche a día
    const toggleButton = document.createElement('button');
    toggleButton.id = 'toggle-mode';
    toggleButton.innerHTML = '<i class="fas fa-moon"></i>'; // Icono inicial de luna
    document.body.appendChild(toggleButton);

    // elementos a los que se aplicará el modo noche
    const body = document.body;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const links = document.querySelectorAll('a');
    const targetParagraphs = document.querySelectorAll('p.night-mode-target'); // Selecciona solo los p con la clase night-mode-target
    const targetHeaders = document.querySelectorAll('h2.night-mode-target'); // Selecciona solo los h2 con la clase night-mode-target
    const visionTitles = document.querySelectorAll('.titulovision');
    const missionTitles = document.querySelectorAll('.titulomision');

    // Obtener el estado actual del modo desde el almacenamiento local del navegador
    const nightModeState = localStorage.getItem('nightMode') === 'true';

    // Configurar el modo inicial
    setNightMode(nightModeState);

    toggleButton.addEventListener('click', function () {
        const nightModeEnabled = body.classList.toggle('night-mode');
        header.classList.toggle('night-mode');
        footer.classList.toggle('night-mode');
        links.forEach(link => link.classList.toggle('night-mode'));
        targetParagraphs.forEach(paragraph => paragraph.classList.toggle('night-mode')); // Aplica night-mode solo a los p con la clase night-mode-target
        targetHeaders.forEach(header => header.classList.toggle('night-mode')); // Aplica night-mode solo a los h2 con la clase night-mode-target
        visionTitles.forEach(title => title.classList.toggle('night-mode')); // Aplica night-mode a los títulos de visión
        missionTitles.forEach(title => title.classList.toggle('night-mode')); // Aplica night-mode a los títulos de misión

        // Guardar el estado del modo en el almacenamiento local del navegador
        localStorage.setItem('nightMode', nightModeEnabled);

        // Cambiar icono según el modo
        if (nightModeEnabled) {
            toggleButton.innerHTML = '<i class="fas fa-sun"></i>'; // Icono de sol
        } else {
            toggleButton.innerHTML = '<i class="fas fa-moon"></i>'; // Icono de luna
        }
    });

    // Función para aplicar el modo noche
    function setNightMode(enabled) {
        if (enabled) {
            body.classList.add('night-mode');
            header.classList.add('night-mode');
            footer.classList.add('night-mode');
            links.forEach(link => link.classList.add('night-mode'));
            targetParagraphs.forEach(paragraph => paragraph.classList.add('night-mode')); // Aplica night-mode solo a los p con la clase night-mode-target
            targetHeaders.forEach(header => header.classList.add('night-mode')); // Aplica night-mode solo a los h2 con la clase night-mode-target
            visionTitles.forEach(title => title.classList.add('night-mode')); // Aplica night-mode a los títulos de visión
            missionTitles.forEach(title => title.classList.add('night-mode')); // Aplica night-mode a los títulos de misión
            toggleButton.innerHTML = '<i class="fas fa-sun"></i>'; // Icono de sol
        } else {
            toggleButton.innerHTML = '<i class="fas fa-moon"></i>'; // Icono de luna
        }
    }
});
