import React, {useState} from 'react'
import {Typography, Button, Form,Input }from 'antd';
import FileUpload from '../../util/FileUpload'
import Axios from 'axios';

//const{Title}=Typography;

//===============================================================================
// FileUpload.js -> UploadProductPage.js -> 확인버튼 누름 -> server로 데이터 전송
//===============================================================================
const{TextArea}=Input;

const Categorys = [
  {key:1, value:"문구"},
  {key:2, value:"식품"},
  {key:3, value:"컴퓨터 용품"},
  {key:4, value:"옷"},
  {key:5, value:"주방용품"},
  {key:6, value:"전자기기"},
  {key:7, value:"음료"}


]

function UploadProductPage(props) {
 //서버쪽으로 보내야할 모든 정보
  const [Title, setTitle] = useState("") //입력받음
  const [Description, setDescription] = useState("") //입력받음
  const [Price, setPrice] = useState(0)//가격은 0 부터 시작
  const [Category, setCategory] = useState(1)//카테고리
  const [Images, setImages] = useState([])//이미지 업로드


  const titleChangeHandler = (event) =>{
    setTitle(event.currentTarget.value)
  } //타이핑 할때마다 이 함수를 작동

  const descriptionChangeHandler =(event)=>{
    setDescription(event.currentTarget.value)
  }//타이핑 할때마다 이 함수를 작동

  const priceChangeHandler=(event)=>{
    setPrice(event.currentTarget.value)
  }//타이핑 할때마다 이 함수를 작동

  const categoryChangeHandler = (event) =>{
    setCategory(event.currentTarget.value)
  }//항목을 클릭할때마다 이 함수를 작동

  const updateImages = (newImages) =>{
    setImages(newImages)

  }

  const submitHandler = (event) => {
    event.preventDefault();
    
    if (!Title || !Description || !Price || !Category || Images.length === 0) {
      return alert(" 모든 값을 넣어야 합니다.")
  }

    //서버에 채워진 값들을 request로 보냄
    const body = {
      //로그인 된 사람의 ID 
      writer: props.user.userData._id,
      title: Title,
      description: Description,
      price: Price,
      images: Images,
      categorys: Category
  }

  Axios.post('/api/product', body)
      .then(response => {
          if (response.data.success) {
              alert('상품 업로드에 성공 했습니다.')
              props.history.push('/')
          } else {
              alert('상품 업로드에 실패 했습니다.')
          }
      })

  }

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h2> 상품 업로드 </h2>
            </div>

            <Form onSubmit={submitHandler}>
                
                <FileUpload refreshFunction={updateImages} />

                <br />
                <br />
                <label>이름</label>
                <Input onChange={titleChangeHandler} value={Title} />
                <br />
                <br />
                <label>설명</label>
                <TextArea onChange={descriptionChangeHandler} value={Description} />
                <br />
                <br />
                <label>가격</label>
                <Input type="number" onChange={priceChangeHandler} value={Price} />
                <br />
                <br />
                <select onChange={categoryChangeHandler} value={Category}>
                    {Categorys.map(item => (
                        <option key={item.key} value={item.key}> {item.value}</option>
                    ))}
                </select>
                <br />
                <br />
                <button type="submit">
                    확인
                </button>
            </Form>


        </div>
  )
}

export default UploadProductPage
