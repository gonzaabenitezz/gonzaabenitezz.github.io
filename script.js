let loadMoreBtn1 = document.querySelector('#load-more-1'); /* se selecciona un botón con el id #load-more-1 y se asigna a la variable loadMoreBtn1. */
let currentItem1 = 4;   /* se inicializa currentItem1 con el valor 4 */

loadMoreBtn1.onclick = () => {  /* cuando el boton loadMoreBtn1 recibe un click se ejecutara lo que esta abajo */
    let boxes = [...document.querySelectorAll(
        '.box-container-1 .box-1'   /* Se seleccionan todos los elementos con la clase .box-1 que están dentro de un contenedor con la clase .box-container-1. Se almacenan en un array llamado boxes */
    )];

    for(var i = currentItem1; i < currentItem1 + 4; i++){
        boxes[i].style.display = 'inline-block';    /* Se itera desde currentItem1 hasta currentItem1 + 4 y mostrando 4 elementos, ademas establece su estilo de visualización como 'inline-block */
    }
    currentItem1 += 4;
    if(currentItem1 >= boxes.length){
        loadMoreBtn1.style.display = 'none'; /*  Se verifica si currentItem1 es mayor o igual a los elementos en boxes. Si es así, se oculta el botón loadMoreBtn1 estableciendo su visualización en 'none'.  */
    }
}





let loadMoreBtn2 = document.querySelector('#load-more-2');
let currentItem2 = 4;

loadMoreBtn2.onclick = () => {
    let boxes = [...document.querySelectorAll(
        '.box-container-2 .box-2'
    )];

    for(var i = currentItem2; i < currentItem2 + 4; i++){
        boxes[i].style.display = 'inline-block';
    }
    currentItem2 += 4;
    if(currentItem2 >= boxes.length){
        loadMoreBtn2.style.display = 'none';
    }
}





let loadMoreBtn3 = document.querySelector('#load-more-3');
let currentItem3 = 4;

loadMoreBtn3.onclick = () => {
    let boxes = [...document.querySelectorAll(
        '.box-container-3 .box-3'
    )];

    for(var i = currentItem3; i < currentItem3 + 4; i++){
        boxes[i].style.display = 'inline-block';
    }
    currentItem3 += 4;
    if(currentItem3 >= boxes.length){
        loadMoreBtn3.style.display = 'none';
    }
}
