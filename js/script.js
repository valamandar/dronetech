class Icone {

    constructor() {
        this.icones = Array.from(document.querySelectorAll(".img"))
        this.details = Array.from(document.querySelectorAll(".details"))
        this.details_container = document.getElementById("show_details")
        this.currentIndex = 0

        this.icones.forEach((icone) => {

            icone.addEventListener("mouseenter", (e) => {

                let element = e.target
                this.currentIndex = this.icones.indexOf(element)
                // console.log
                this.show_icones()

            })

            icone.addEventListener("mouseleave", () => {
                console.log("lieave")
                this.hide_icones()
            })
        })


        // setInterval(() => {

        //     if (this.currentIndex >= this.icones.length) {
        //         this.currentIndex = 0
        //     }

        //     setTimeout(() => {
        //         this.show_icones()

        //     }, 0)

        //     setTimeout(() => {
        //         this.hide_icones()
        //     }, 5900)

        //     // setTimeout(() => {
        //     // icones[currentIndex].classList.remove("active")
        //     // }, 5000)


        //     this.currentIndex++

        // }, 6000)

    }

    show_icones() {
        this.icones.forEach((icone, index) => {
            if (index === this.currentIndex) {
                icone.classList.add("active")
                this.show_details(this.currentIndex)
                return 0
            }
            icone.classList.add("flou")
        })
    }

    hide_icones() {
        // this.currentIndex = (par_index === null) ? this.currentIndex : par_index
        // console.log(this.currentIndex)

        this.icones.forEach((icone, index) => {
            if (index === this.currentIndex) {
                icone.classList.remove("active")
                this.hide_details(index)
                return 0;
            }
            icone.classList.remove("flou")

        })
    }

    show_details(detIndex) {
        this.details_container.classList.add("active")

        this.details.forEach((det, index) => {
            if (index === detIndex) {
                det.classList.add("active");
                // console.log(det)
                return 0;
            }
            det.classList.remove("active")
        })

    }

    hide_details() {

        this.details_container.classList.remove("active")
    }

}


new Icone