class ImageZoom {
    constructor ($el) {
        this.$el = document.querySelector($el)
    }
    
    mount () {
        let $el = this.$el
        $el.style.borderRadius = '25px'
        $el.classList.add('zoom')
        function moving(event, $el){
            let dimension = $el.getBoundingClientRect(),
                stepX = event.clientX - (dimension.left + (dimension.width / 2)),
                stepY = event.clientY - (dimension.top + (dimension.height / 2));
            $el.children[0].style.left = `${-Math.round(stepX * 1)}` + 'px';
            $el.children[0].style.top = `${-Math.round(stepY * 1)}` + 'px';
        }
        function zooming($el){
            $el.children[0].style.transform = `scale(2)`
            $el.addEventListener('mousemove', event => moving(event, $el))
        }
        function leaving($el){
            $el.children[0].style.transform = ``;
            $el.children[0].style.left = '0px';
            $el.children[0].style.top = '0px';
        }

        $el.addEventListener('mouseenter', () => zooming($el))
        $el.addEventListener('mouseleave', () => leaving($el))
    }
}