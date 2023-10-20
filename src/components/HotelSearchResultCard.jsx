const validateImage = (imageSource) => {
    return imageSource;
}

export default function HotelSearchResultCard({thumbnail, title, subtitles, price, rating, link}){
    const hotelImageSource = validateImage(thumbnail);
    return(
        <>
            <div className="hotel-search-result-card">
                <img src={hotelImageSource} alt="Hotel Image"/>
                <div>{title}</div>
                <div>
                    <ul>
                        {subtitles?.map(subtitle => {
                            return <li key={crypto.randomUUID()}>{subtitle}</li>
                        })}
                    </ul>
                </div>
                <div>{price.currency}{price.value}</div>
            </div>
        </>
    )
}