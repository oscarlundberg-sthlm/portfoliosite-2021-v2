export default function mobileMovement(parentEl, targetEl, transformsToKeep, opacityWhileMoving, center) {
    let sideToSide = 0, updown = 0;
    let tareYAxis = null;
    let tareXAxis = null;

    //landscapePopup test
    const landscapePopup = document.createElement('div');
    landscapePopup.id = 'landscape-popup';
    landscapePopup.style.position = 'fixed';
    landscapePopup.style.zIndex = 20000;
    landscapePopup.style.backgroundColor = '#FF9A02';
    landscapePopup.style.width = '100vw';
    landscapePopup.style.height = '100vh';
    landscapePopup.innerHTML = `
        <h1>Please rotate your device 90°<br/>The website looks way better in portrait mode =)</h1>
    `;

    // // Support functions
    const getOrientation = () => (
        parentEl.clientWidth > parentEl.clientHeight ? "Landscape" : "Portrait"
    )

    let orientation = getOrientation();

    const onWindowResize = () => {
        orientation = getOrientation();

        tareYAxis = null;
        tareXAxis = null;
    }

    window.addEventListener( 'resize', onWindowResize );

    const eventFunc = {
        [targetEl.id] : ( event ) => {
            switch (orientation) {
                case "Portrait":

                    //landscapePopup test
                    if (document.getElementById('landscape-popup')) {
                        document.getElementById('landscape-popup').remove();
                    }

                    if (!tareYAxis) {
                        tareYAxis = event.beta;
                    }
                    if (!tareXAxis) {
                        tareXAxis = event.gamma;
                    }
                    sideToSide = tareXAxis - event.gamma;
                    updown = tareYAxis - event.beta;
                    break;
                case "Landscape":
                    if (!tareYAxis) {
                        tareYAxis = event.gamma;
                    }
                    if (!tareXAxis) {
                        tareXAxis = event.beta;
                    }
                    sideToSide = tareXAxis - event.beta;
                    updown = tareYAxis - event.gamma;

                    //landscapePopup test
                    document.body.insertAdjacentElement("afterbegin", landscapePopup);

                    break;
                default:
                    break;
            }
            
            let dynamicDegreesY = Math.round(updown / -4);
            let dynamicDegreesX = Math.round(sideToSide / 4);

            if (center === true) {
                targetEl.style.top = '50%';
                targetEl.style.left = '50%';
                targetEl.style.right = 'initial';
                targetEl.style.bottom = 'initial';
            }

            targetEl.style.transform = `
            rotateX(${dynamicDegreesY}deg)
            rotateY(${dynamicDegreesX}deg)
            ${transformsToKeep}
            `;

            if (opacityWhileMoving) targetEl.style.opacity = opacityWhileMoving;

        }
    };

    // Listen to events to control movement
    if (window.DeviceOrientationEvent) {
        window.addEventListener( 'deviceorientation', eventFunc[targetEl.id] ) 
    }
}