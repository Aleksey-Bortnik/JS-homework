export default function modalControl(){
    let $modal = document.querySelector('.modal');
    function clearForm(){
        let $inputs = document.querySelectorAll('.popap-form input');

        for(let $input of $inputs){
            $input.value = '';
        }
    }
    function open(){
        $modal.classList.add('open');
    }
    function close(){
        $modal.classList.remove('open');
        clearForm();
    }
    function toggle(event){
        if(event === 'open'){
            open();
        }

        if(event === 'close'){
            close();
        }
    }
    return {
        toggle: toggle
    }
}
