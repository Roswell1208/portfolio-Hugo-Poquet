const sr = ScrollReveal({
    duration: 500,  // Durée de l'animation en millisecondes
    reset: true,  // Réinitialiser l'animation lors du défilement en arrière
    mobile: true,  // Activer les animations sur mobile
});

sr.reveal('.homeTitle', {
    distance: '20px',  // Distance de déplacement de l'élément
    easing: 'ease-out',  // Type d'animation (facultatif)
    scale: 0.75,  // Facteur de mise à l'échelle
});

sr.reveal('.presentation', {
    distance: '20px',  // Distance de déplacement de l'élément
    easing: 'ease-out',  // Type d'animation (facultatif)
    scale: 0.75,  // Facteur de mise à l'échelle
});

sr.reveal('.lastProjects', {
    distance: '20px',  // Distance de déplacement de l'élément
    easing: 'ease-out',  // Type d'animation (facultatif)
    scale: 0.75,  // Facteur de mise à l'échelle
});


sr.reveal('.lastVeilles', {
    distance: '20px',  // Distance de déplacement de l'élément
    easing: 'ease-out',  // Type d'animation (facultatif)
    scale: 0.75,  // Facteur de mise à l'échelle
});


sr.reveal('.container', {
    easing: 'ease-out',  // Type d'animation (facultatif)
});


sr.reveal('.container .box', {
    distance: '20px',  // Distance de déplacement de l'élément
    easing: 'ease-out',  // Type d'animation (facultatif)
    scale: 0.75,  // Facteur de mise à l'échelle
    interval: 75,  // Interval de décalage des animations
});