export default function mouseMovement(parentEl, targetEl, degrees, transformsToKeep, opacityWhileMoving) {
    const mouseMove = (e) => {
        let xCenter = e.clientX - (parentEl.clientWidth / 2);
        let yCenter = e.clientY - (parentEl.clientHeight / 2);
        let x0To1 = xCenter / (parentEl.clientWidth / 2);
        let y0To1 = yCenter / (parentEl.clientHeight / 2);
    
        let dynamicDegreesX = (Math.round(x0To1 * 100) / 100) * degrees;
        let dynamicDegreesY = (Math.round(y0To1 * 100) / 100) * degrees;
    
        dynamicDegreesX = Math.round(dynamicDegreesX);
        dynamicDegreesY = Math.round(-1 * dynamicDegreesY);
    
        requestAnimationFrame(() => {
            targetEl.style.transform = `
                rotateX(${dynamicDegreesY}deg)
                rotateY(${dynamicDegreesX}deg)
                ${transformsToKeep}
                scale(1)
                `;
            
            if (opacityWhileMoving) targetEl.style.opacity = opacityWhileMoving;
        })
    }
    
    if (window.MouseEvent) {
        parentEl.addEventListener('mousemove', mouseMove);
    }
}