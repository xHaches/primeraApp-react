
export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=d3fbKi7Gvbl4Vyy9E1IoIZaIqGugn4PE`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    const gifs = data.map( ({ id, title, images  }) => {
        return {
            id,
            title,
            url: images?.downsized_medium.url
        }
    });
    return gifs;
}

