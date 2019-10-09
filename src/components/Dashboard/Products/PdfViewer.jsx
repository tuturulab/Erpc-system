import React, { useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Axios from 'axios';
import {
  Layout,
  Button,
  Input,
  Breadcrumb,
  Icon,
  Typography,
  Spin,
  Row,
  Col,
  Card
} from 'antd';

import Loading from '.././Loading';
import Divider from '.././Divider';
import ReactTooltip from 'react-tooltip';

import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const { Title } = Typography;
const { Content } = Layout;

export default function PdfViewer(t, i18n) {

  const [loading , setLoading] = React.useState(false);
  const [pdf64, setPdf] = React.useState('');
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);

  useEffect(() => {
    //fetch here
    Axios.get('http://localhost:5001/api/purchase/getPdf64Test')
      .then(response => {
        if(response.status === 200){
          setPdf(response.data.pdf64);
          setLoading(false);
        } else {
          setLoading(false);
        }
      });
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  }

  const nextPage = () => {
    if(pageNumber < numPages){
      setPageNumber(pageNumber + 1);
    }
  }

  const previusPage = () => {
    if(pageNumber != 1){
      setPageNumber(pageNumber - 1);
    }
  }

  return(
    <div>
      <Row>
      <ReactTooltip />
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <div id="overlay-nav" >
          <Title id="maintitle">Tuturu utils</Title>

        </div>

        <div className="wrapper">
          <Card bordered={false} id="card-content">

          <Col xs={24} sm={24} md={12} lg={12} xl={12}>

            <Breadcrumb style={{marginBottom: '20px'}}>
              <Breadcrumb.Item href="">
                <Icon type="home" />
              </Breadcrumb.Item>
              <Breadcrumb.Item href="">
                <Icon type="user" />
                <span>Utils</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item>PdfViewer</Breadcrumb.Item>
            </Breadcrumb>


          </Col>

          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="section-btn" >


            </div>
          </Col>

            {/* Main Content*/}
            <Col xs={24} sm={24} md={10} lg={10} xl={10}>

            </Col>

            <Col xs={24} sm={24} md={4} lg={4} xl={4}>

            </Col>

            <Col xs={24} sm={24} md={10} lg={10} xl={10}>
              <div className="section-btn" >


              </div>


            </Col>

            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Divider> </Divider>
              <div >
                {loading ?
                  <Loading> </Loading>
                  :

                  <div>
                    <Document
                      file={pdf64}
                      onLoadSuccess={onDocumentLoadSuccess}
                    >
                      <Page pageNumber={pageNumber} />
                      <div>
                        <div><p>Page {pageNumber} of {numPages}</p></div>
                        <Button onClick={previusPage}>Atras</Button>
                        <Button onClick={nextPage}>Siguiente</Button>
                      </div>
                    </Document>
                  </div>
                }

              </div>
            </Col>

          </Card>
        </div>
      </Col>

      {/*Extra Content */}
      <Content id="maincontent"
        style={{
          padding: 24,
          minHeight: 400
        }}
      >


      </Content>


    </Row>
    </div>
  );
}
