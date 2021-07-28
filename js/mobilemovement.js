export default function mobileMovement(parentEl, targetEl, transformsToKeep) {
    let mouseX = 0, mouseY = 0;

    // // Support functions
    const getOrientation = () => (
        parentEl.clientWidth > parentEl.clientHeight ? "Landscape" : "Portrait"
    )

    let orientation = getOrientation();

    const onWindowResize = () => {
        orientation = getOrientation();

        windowHalfX = parentEl.clientWidth / 2;
        windowHalfY = parentEl.clientHeight / 2;
    }

    parentEl.addEventListener( 'resize', onWindowResize );

    const eventFunc = {
        [targetEl.id] : ( event ) => {
            switch (orientation) {
                case "Portrait":
                    mouseX = event.gamma;
                    mouseY = event.beta;
                    break;
                case "Landscape":
                    mouseX = event.beta;
                    mouseY = event.gamma;
                    break;
                default:
                    break;
            }
            
            let dynamicDegreesY = Math.round(mouseY / 5);
            let dynamicDegreesX = Math.round(mouseX * -1);

            targetEl.style.transform = `
            rotateX(${dynamicDegreesY}deg)
            rotateY(${dynamicDegreesX}deg)
            ${transformsToKeep}
            `;
        }
    };

    // Listen to events to control movement
    window.addEventListener( 'deviceorientation', eventFunc[targetEl.id] ) 
}