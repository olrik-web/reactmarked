export async function get() {
    const response = await fetch('http://localhost:8099/categories',
        {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )
    try {
        const rep = await response.json()
        if (!response.ok) {
            return Promise.reject("Response not ok. ")
        }
        else {
            return rep;
        }
    }
    catch (error) {
        return "Error: " + error
    }
}

export async function getCount() {
    const response = await fetch('http://localhost:8099/categories/count',
        {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )
    try {
        const rep = await response.json()
        if (!response.ok) {
            return Promise.reject("Response not ok. ")
        }
        else {
            return rep;
        }
    }
    catch (error) {
        return "Error: " + error
    }
}

export async function getAds(category) {
    const response = await fetch('http://localhost:8099/ads?category=' + category,
        {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )
    try {
        const rep = await response.json()
        if (!response.ok) {
            return Promise.reject("Response not ok. ")
        }
        else {
            return rep;
        }
    }
    catch (error) {
        return "Error: " + error
    }
}
export async function getAd(id) {
    const response = await fetch('http://localhost:8099/ads/' + id,
        {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )
    try {
        const rep = await response.json()
        if (!response.ok) {
            return Promise.reject("Response not ok. ")
        }
        else {
            return rep;
        }
    }
    catch (error) {
        return "Error: " + error
    }
}