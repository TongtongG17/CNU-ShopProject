import React, { useState, useEffect } from 'react'
import ImageGallery from 'react-image-gallery';
//==========================================================
//            상품 상세 페이지 이미지 보여주는 곳
//==========================================================

function ProductImage(props) { //프로덕트에 모든 정보를 가져옴

    const [Images, setImages] = useState([])

    useEffect(() => {

        if (props.detail.images && props.detail.images.length > 0) { //props.detail.images가 있고 1개 이상일때
            let images = []

            props.detail.images.map(item => {
                images.push({
                    original: `http://localhost:5000/${item}`,
                    thumbnail: `http://localhost:5000/${item}`
                })
            })
            setImages(images)
        }

    }, [props.detail])

    return (
        <div>
            <ImageGallery items={Images} />
        </div>
    )
}

export default ProductImage