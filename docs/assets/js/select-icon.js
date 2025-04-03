const installNiceSelect2 = () => {

    const selectElement = document.querySelectorAll('select')


    let options = {
        searchable: true,
        placeholder: 'select',
        searchtext: 'find currency',
        selectedtext: 'geselecteerd'
    }
    const initializePlagin = () => selectElement.forEach(select => NiceSelect.bind(select, options))


    const getSrc = () => {
        const allSrc = []

        selectElement.forEach(select => {
            let eachDataSrc = [];
            const options = select.querySelectorAll('option')

            options.forEach(option => {
                eachDataSrc.push(option.getAttribute('data-src'))
            })
            allSrc.push(eachDataSrc)
        })

        return allSrc;
    }

    const allSrc = getSrc()


    window.addEventListener('load', () => {
        const niceSelectElemen = document.querySelectorAll('.nice-select')

        const setUrl = () => niceSelectElemen.forEach((item, index) => {
            const itemOptions = item.querySelectorAll('.option')
            const currentDataSrc = allSrc[index];

            itemOptions.forEach((option, optionIndex) => {
                let cryptoIcon = document.createElement('img');
                const url = currentDataSrc[optionIndex];
                cryptoIcon.setAttribute('src', url);
                option.prepend(cryptoIcon);
                console.log(itemOptions);

            })
        })
        setUrl()
    })

    initializePlagin()
}


document.querySelector('select') ? installNiceSelect2() : null