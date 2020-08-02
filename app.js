document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const width = 28 // 28 x 28 = 784 squares
    const modal = document.getElementById('mission-modal')
    const modalClose = document.getElementById('close')
    const actionButton = document.getElementById('actionButton')
    const modalTitle = document.querySelector('h4')
    const option1Button = document.getElementById('option1')
    const option2Button = document.getElementById('option2')
    var missionName = ''
    var option1 = ''
    var option2 = ''

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

                actionButton.style.display = "none"

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
    // class Decision {
    //     constructor(decisionTitle, Option1, Option2) {
    //         this.decisionTitle = decisionTitle
    //         this.Option1 = Option1
    //         this.Option2 = Option2
    //     }
    // }

    // locationActions = [
    //     new Decision('moon-lander-mission', 'Gather Equipments', 'Lander Checking'),
    //     new Decision('moon-rock-collection', 'Gather Moonrocks', 'Cancel'),
    //     new Decision('icy-area', 'Collect Ice Samples', 'Cancel'),
    //     new Decision('moon-base-land', 'Set Up Moonbase', 'Cancel')
    // ]
       
    // for (let i = 0; i < locationActions.length; i++) {
    //     let title = locationActions[i].decisionTitle
    //     let option1 = locationActions[i].Option1
    //     let option2 = locationActions[i].Option2

    //     return title, option1, option2
    // }
    function openMission() {
        modal.style.display = "block"
        actionButton.textContent = "Open Mission"
        modalTitle.textContent = missionName
        option1Button.textContent = option1
        option2Button.textContent = option2
    }

    function moonLander() {
        missionName = "Moonlander-Mission"
        option1 = "Gather Equipments"
        option2 = "Lander Checking"

        actionButton.style.display = "block"

        if (actionButton.addEventListener('click', openMission, true)) {
            openMission(e)
        }

        option1Button.onclick = function() {
            alert("Scientific Equipment Gathered")
            let mission1 = document.getElementById('mission1')
            mission1.classList.add('completed')
        }

        modalClose.onclick = function() {
            modal.style.display = "none"
            actionButton.style.display = "none"
        }

        }

    function collectMoonRock() {
        missionName = "Explore the Rocky Mountains"
        option1 = "Gather Moonrocks"
        option2 = "Continue Exploring"

        actionButton.style.display = "block"

        if (actionButton.addEventListener('click', openMission, true)) {
            openMission(e)
        }

        option1Button.onclick = function() {
            alert("Collected Moonrock samples")
            let mission2 = document.getElementById('mission2')
            mission2.classList.add('completed')
        }

        modalClose.onclick = function() {
            modal.style.display = "none"
            actionButton.style.display = "none"
        }
     
    }

    function visitIcyArea() {
        missionName = "Explore the Dark Side of the Moon"
        option1 = "Collect ice samples"
        option2 = "Continue Exploring"

        actionButton.style.display = "block"

        if (actionButton.addEventListener('click', openMission, true)) {
            openMission(e)
        }

        option1Button.onclick = function() {
            alert("Collected ice samples")
            let mission3 = document.getElementById('mission3')
            mission3.classList.add('completed')
        }

        modalClose.onclick = function() {
            modal.style.display = "none"
            actionButton.style.display = "none"
        }
    }

    function buildMoonBase() {
        missionName = "Found a place for Moonbase!"
        option1 = "Set Up Moonbase"
        option2 = "Continue Exploring"

        actionButton.style.display = "block"

        if (actionButton.addEventListener('click', openMission, true)) {
            openMission(e)
        }

        option1Button.onclick = function() {
            const moonBaseLand = document.querySelectorAll('.grid .moon-base-land')

            moonBaseLand.forEach(square => {
                square.style.backgroundColor = "rgb(52, 114, 222)"
            })

            alert("Moonbase set up")

            let mission4 = document.getElementById('mission4')
            mission4.classList.add('completed')
        }


            

    }
})