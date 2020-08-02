document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const width = 28 // 28 x 28 = 784 squares

    const actionButton1 = document.getElementById('actionButton1')
    const actionButton2 = document.getElementById('actionButton2')

    // item1 = document.getElementById('item1').innerHTML
    // item3 = document.getElementById('item3').innerHTML
    // item2 = document.getElementById('item2').innerHTML
    // item4 = document.getElementById('item4').innerHTML

    const quest1 = document.getElementById('quest1')
    const quest2 = document.getElementById('quest2')
    const quest3 = document.getElementById('quest3')
    const quest4 = document.getElementById('quest4')

    const layout = [
        0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,
        0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,4,4,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,4,4,0,0,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,4,4,0,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
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

                actionButton1.style.display = "none"
                actionButton2.style.display = "none"

                // check if astronaut is in the left side
                const isAtLeftEdge = (astronautCurrentIndex % width === 0)

                if(isAtLeftEdge) {
                    astronautCurrentIndex = astronautCurrentIndex + 27
                }

                // if moon-lander is on the left side of astronaut, check mission
                if (squares[astronautCurrentIndex -1].classList.contains('moon-lander')) {
                    moonLander()
                }

                if (squares[astronautCurrentIndex -1].classList.contains('moon-rocks')) {
                    collectMoonRock()
                }

                if (squares[astronautCurrentIndex -1].classList.contains('icy-area')) {
                    visitIcyArea()
                }

                if (squares[astronautCurrentIndex -1].classList.contains('moon-base-land')) {
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

                    actionButton1.style.display = "none"
                    actionButton2.style.display = "none"

                    const isAtTopEdge = (astronautCurrentIndex >= 0 && astronautCurrentIndex <= 27)

                    if(isAtTopEdge) {
                        astronautCurrentIndex = astronautCurrentIndex + 756
                    }

                    // if moon-lander is on the top of astronaut, check mission
                    if (squares[astronautCurrentIndex - width].classList.contains('moon-lander')) {
                        moonLander()
                    }

                    if (squares[astronautCurrentIndex - width].classList.contains('moon-rocks')) {
                        collectMoonRock()
                    }
    
                    if (squares[astronautCurrentIndex - width].classList.contains('icy-area')) {
                        visitIcyArea()
                    }
    
                    if (squares[astronautCurrentIndex - width].classList.contains('moon-base-land')) {
                        buildMoonBase()
                    }
                break
            case 39:
                if (astronautCurrentIndex % width < width -1 
                    && !squares[astronautCurrentIndex + 1].classList.contains('moon-lander')
                    && !squares[astronautCurrentIndex + 1].classList.contains('moon-rocks')
                    && !squares[astronautCurrentIndex + 1].classList.contains('icy-area')
                    && !squares[astronautCurrentIndex + 1].classList.contains('moon-base-land'))

                    astronautCurrentIndex +=1

                    actionButton1.style.display = "none"
                    actionButton2.style.display = "none"

                    // check if astronaut is in the right side
                    const isAtRightSide = !((astronautCurrentIndex % width) < (width -1))

                    if(isAtRightSide) {
                        astronautCurrentIndex = astronautCurrentIndex - 27
                    }

                    // if moon-lander is on the right side of astronaut, check mission
                    if (squares[astronautCurrentIndex + 1].classList.contains('moon-lander')) {
                        moonLander()
                    }

                    if (squares[astronautCurrentIndex + 1].classList.contains('moon-rocks')) {
                        collectMoonRock()
                    }
    
                    if (squares[astronautCurrentIndex + 1].classList.contains('icy-area')) {
                        visitIcyArea()
                    }
    
                    if (squares[astronautCurrentIndex + 1].classList.contains('moon-base-land')) {
                        buildMoonBase()
                    }
                break
            case 40:
                if (astronautCurrentIndex + width >= 0
                    && !squares[astronautCurrentIndex + width].classList.contains('moon-lander')
                    && !squares[astronautCurrentIndex + width].classList.contains('moon-rocks')
                    && !squares[astronautCurrentIndex + width].classList.contains('icy-area')
                    && !squares[astronautCurrentIndex + width].classList.contains('moon-base-land'))

                    astronautCurrentIndex += width

                    actionButton1.style.display = "none"
                    actionButton2.style.display = "none"

                    const isAtBottoomEdge = (astronautCurrentIndex >= 756 && astronautCurrentIndex <= 784)

                    if(isAtBottoomEdge) {
                        astronautCurrentIndex = astronautCurrentIndex - 756
                    }

                    // if moon-lander is on the bottom of astronaut, check mission
                    if (squares[astronautCurrentIndex + width].classList.contains('moon-lander')) {
                        moonLander()
                    }

                    if (squares[astronautCurrentIndex + width].classList.contains('moon-rocks')) {
                        collectMoonRock()
                    }
    
                    if (squares[astronautCurrentIndex + width].classList.contains('icy-area')) {
                        visitIcyArea()
                    }
    
                    if (squares[astronautCurrentIndex + width].classList.contains('moon-base-land')) {
                        buildMoonBase()
                    }
                break
        }
        squares[astronautCurrentIndex].classList.add('astronaut')
    }

    document.addEventListener('keydown', moveAstronaut)
    moveAstronaut()

    function moonLander() {
            actionButton1.style.display = "block"

            actionButton1.innerText = "Gather Scientific Equipments"
            
            actionButton1.onclick = function() {
                span = quest4.querySelector('span')
                span.textContent = "COMPLETED"
                span.classList.remove('tag')
                span.classList.add('tag-completed')
                actionButton1.innerText = "Done getting the tools"
            }

        }

    function collectMoonRock() {
        actionButton1.style.display = "block"

        actionButton1.innerText = "Collect moon rocks"

        actionButton1.onclick = function() {
            span = quest1.querySelector('span')
            span.textContent = "COMPLETED"
            span.classList.remove('tag')
            span.classList.add('tag-completed')
            actionButton1.innerText = "Moon rocks collected"
        }
     
    }

    function visitIcyArea() {
        actionButton1.style.display = "block"

        actionButton1.innerText = "Collect ice samples"

        actionButton1.onclick = function() {
            span = quest2.querySelector('span')
            span.textContent = "COMPLETED"
            span.classList.remove('tag')
            span.classList.add('tag-completed')
            actionButton1.innerText = "Samples collected !"
        }
    }

    function buildMoonBase() {
        actionButton1.style.display = "block"

        actionButton1.innerText = "Build Moon Base"
        actionButton1.onclick = function() {
            const moonBaseLand = document.querySelectorAll('.grid .moon-base-land')

            moonBaseLand.forEach(square => {
                square.style.backgroundColor = "rgb(52, 114, 222)"
            })

            span = quest3.querySelector('span')
            span.textContent = "COMPLETED"
            span.classList.remove('tag')
            span.classList.add('tag-completed')
            actionButton1.innerText = "Moon Base Completed !"
        }
    }
})