document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const width = 28 // 28 x 28 = 784 squares
    const layout = [
        0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,
        0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,4,4,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,4,4,0,0,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,4,4,0,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ]

    const squares = []
    // 0 - moon surface
    // 1 - moon lander
    // 2 - moon rocks
    // 3 - glacier, icy area
    // 4 - moon base

    // draw and render
    function createGrid() {
        for (i = 0; i < layout.length; i++) {
            const square = document.createElement('div')
            grid.appendChild(square)
            squares.push(square)
            
            // add layout to the board
            if (layout[i] === 0) {
                squares[i].classList.add('moon-surface')
            } else if (layout[i] === 1) {
                squares[i].classList.add('moon-lander')
            } else if (layout[i] === 2) {
                squares[i].classList.add('moon-rocks')
            } else if (layout[i] === 3) {
                squares[i].classList.add('icy-area')
            } else if (layout[i] === 4) {
                squares[i].classList.add('moon-base-land')
            }
        }
    }

    createGrid()

    // starting position of astronaut
    let astronautCurrentIndex = 747
    squares[astronautCurrentIndex].classList.add('astronaut')

    function moveAstronaut(e) {
        squares[astronautCurrentIndex].classList.remove('astronaut')
        
        switch(e.keyCode) {
            case 37:
                if (astronautCurrentIndex % width !== 0 
                    && !squares[astronautCurrentIndex -1].classList.contains('moon-lander')
                    && !squares[astronautCurrentIndex -1].classList.contains('moon-rocks')
                    && !squares[astronautCurrentIndex -1].classList.contains('icy-area')
                    && !squares[astronautCurrentIndex -1].classList.contains('moon-base-land'))

                    astronautCurrentIndex -=1
                    // check if astronaut is in the left side
                    const isAtLeftEdge = (astronautCurrentIndex % width === 0)

                    if(isAtLeftEdge) {
                        astronautCurrentIndex = astronautCurrentIndex + 27
                    }

                // if astronaut is near moon-lander, trigger option box
                if (squares[astronautCurrentIndex -1].classList.contains('moon-lander') 
                    || squares[astronautCurrentIndex -1].classList.contains('moon-rocks')
                    || squares[astronautCurrentIndex -1].classList.contains('icy-area') 
                    || squares[astronautCurrentIndex -1].classList.contains('moon-base-land')) {

                    moonLander()
                    collectMoonRock()
                    visitIcyArea()
                    buildMoonBase()
                }
                break

            case 38:
                if (astronautCurrentIndex - width >= 0
                    && !squares[astronautCurrentIndex - width].classList.contains('moon-lander')
                    && !squares[astronautCurrentIndex - width].classList.contains('moon-rocks')
                    && !squares[astronautCurrentIndex - width].classList.contains('icy-area')
                    && !squares[astronautCurrentIndex - width].classList.contains('moon-base-land'))

                    astronautCurrentIndex -= width

                    const isAtTopEdge = (astronautCurrentIndex >= 0 && astronautCurrentIndex <= 27)

                    if(isAtTopEdge) {
                        astronautCurrentIndex = astronautCurrentIndex + 756
                    }
                break
            case 39:
                if (astronautCurrentIndex % width < width -1 
                    && !squares[astronautCurrentIndex + 1].classList.contains('moon-lander')
                    && !squares[astronautCurrentIndex + 1].classList.contains('moon-rocks')
                    && !squares[astronautCurrentIndex + 1].classList.contains('icy-area')
                    && !squares[astronautCurrentIndex + 1].classList.contains('moon-base-land'))

                    astronautCurrentIndex +=1
                    // check if astronaut is in the right side
                    const isAtRightSide = !((astronautCurrentIndex % width) < (width -1))

                    if(isAtRightSide) {
                        astronautCurrentIndex = astronautCurrentIndex - 27
                    }
                break
            case 40:
                if (astronautCurrentIndex + width >= 0
                    && !squares[astronautCurrentIndex + width].classList.contains('moon-lander')
                    && !squares[astronautCurrentIndex + width].classList.contains('moon-rocks')
                    && !squares[astronautCurrentIndex + width].classList.contains('icy-area')
                    && !squares[astronautCurrentIndex + width].classList.contains('moon-base-land'))

                    astronautCurrentIndex += width

                    const isAtBottoomEdge = (astronautCurrentIndex >= 756 && astronautCurrentIndex <= 784)

                    if(isAtBottoomEdge) {
                        astronautCurrentIndex = astronautCurrentIndex - 756
                    }
                break
        }
        squares[astronautCurrentIndex].classList.add('astronaut')
    }

    document.addEventListener('keydown', moveAstronaut)
    moveAstronaut()

    function moonLander() {
        let leftDetectCompletion = !squares[astronautCurrentIndex -1].classList.contains('completed')
       if(!squares[astronautCurrentIndex -1].classList.contains('completed')) {
            let mission1 = document.getElementById('mission1')
            mission1.classList.add('completed')
       } else {

       }
    }

    function collectMoonRock() {
        if(!squares[astronautCurrentIndex -1].classList.contains('completed')) {
            let mission2 = document.getElementById('mission2')
            mission2.classList.add('completed')
        }
        else {

        }
    }

    function visitIcyArea() {
        if(!squares[astronautCurrentIndex -1].classList.contains('completed')) {
            let mission3 = document.getElementById('mission3')
            mission3.classList.add('completed')
        }
        else {

        }
    }

    function buildMoonBase() {
        if(!squares[astronautCurrentIndex -1].classList.contains('completed')) {
            let moonBase = document.querySelectorAll('.moon-base-land')
            moonBase.classList.remove('moon-base-land')

            let mission4 = document.getElementById('mission4')
            mission4.classList.add('completed')
        }
        else {

        }
    }
})