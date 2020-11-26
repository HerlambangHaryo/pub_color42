public function dashboard() // manageshop dashboard
{

if ($this->session->userdata('project_id') == 13) {

$days = $this->input->post('cmbData1');
if ($days) {
$data['selectedValue1'] = $this->input->post('cmbData1');
} else {
$days = '241';
}
$this->load->model('clientmgmt_model');
/*
$result = $this->clientmgmt_model->get_details($this->session->userdata('project_id'));
if($this->session->userdata('project_id') != 11 && $this->session->userdata('project_id') != 15){
$wcfClient = new SoapClient($result[0]['nexus_link'], array('trace' =>1, 'soap_version' => SOAP_1_1));
// $wcfClient = new SoapClient('http://192.168.100.9/ETSOSQService/ETSOSQService.svc?wsdl', array('trace' =>1, 'soap_version' => SOAP_1_1));
$parameters = array("iNoOFDays"=> $days);
$response3 = $wcfClient->sGetNewStockCodes($parameters);
$Detailxml = $response3->sGetNewStockCodesResult;
$this->load->library('format', array());
$data['res'] = $this->format->factory($Detailxml, 'xml')->to_array();
$new_arr = $data['res'];
foreach ($new_arr as $key => $value) {
foreach ($value as $k => $v) {
$data['ProductDetails'][] = $v;
}
}
}
*/
}

if ($data['ProductDetails'][0] == "No Records found") {
$data['ProductDetails'] = array();
}
$this->load->model('special_model');
$this->load->model('noticemsgs_model');
if ($this->session->userdata('project_id') == 14) {
$code = $this->session->userdata('Debtorid');
$warehouse = $this->session->userdata('warehouse');
$data['specialDetails'] = $this->special_model->get_special_details_midwest($warehouse);
//$data['deliveryDayDetails'] = $this->special_model->get_delivery_details_midwestTEST($code);
// $data['deliveryDayDetails'] = $this->special_model->get_delivery_details_midwest($code);
$data['deliveryDayDetails'] = $this->get_delivery_details_midwestTEST();

// if($code == 'WEBCSS-DUB')
// {
// echo "
<pre>";
      //   print_r($code);
      //   exit();
      // }

    } else {
      $data['specialDetails'] = $this->special_model->get_special_details();
    }

    $data['NoticeDetails'] = $this->noticemsgs_model->get_noticemsgs_details();
    $onhold_flag = $this->session->userdata('confirmhold');


    if (!$onhold_flag) {

      if ($this->session->userdata('Debtorid') != "") {

        $status = $this->shop_model->checkUserHoldStatus($this->session->userdata('Debtorid'));

        $this->session->set_userdata('confirmhold', 0);
        if ($status[0]->HOLD == 'Y') {
          $this->session->set_userdata('confirmhold', 1);
        }
      } else {
        $this->session->set_userdata('confirmhold', 0);
      }
    }
    $data['middle'] = 'admin/shop/dashboard';
    $this->load->view('admin/template', $data);
  }