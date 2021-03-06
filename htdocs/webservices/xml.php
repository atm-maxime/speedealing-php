<?php

/* Copyright (C) 2012		Herve Prot		<herve.prot@symeos.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This is to make Dolibarr working with Plesk
//set_include_path($_SERVER['DOCUMENT_ROOT'] . '/htdocs');
//require_once '../master.inc.php';
require_once '../includes/nusoap/lib/nusoap.php';  // Include SOAP

$vardate = date('Ymd') . '_' . date('His');

error_log(print_r($_GET, true));
error_log(print_r($_POST, true));
//error_log(print_r($GLOBALS['HTTP_RAW_POST_DATA'], true));

$server = new soap_server();

//Define our namespace
$namespace = "http://efi.com/dsf/webservices/accountinginterconnect/1";
$server->wsdl->schemaTargetNamespace = $namespace;

//Configure our WSDL
$server->configureWSDL("ProcessDataForOrder", $namespace, '', 'document');

// Register our method
$server->register('ProcessDataForOrder', array('orderId' => 'xsd:int', 'statusId' => 'xsd:int', 'dataAsString' => 'xsd:string'),
        array('Pass' => 'xsd:boolean'),
        $namespace, // namespace
        $server->wsdl->endpoint . '#ProcessDataForOrder', // soapaction
        'document', // style
        'literal', // use
        'N/A' // documentation
);

function ProcessDataForOrder($orderId, $statusId, $dataAsString) {
    
    error_log($statusId);
    $vardate = date('Ymd') . '_' . date('His');
    $XML = str_replace('\"', '"', $dataAsString);

    $dataAsString = str_replace('<?xml version=\"1.0\" encoding=\"UTF-8\"?>', '', $dataAsString);
//$FichierXml = str_replace('<OrderList xmlns=\"rrn:org.xcbl:schemas/xcbl/v4_0/ordermanagement/v1_0/ordermanagement.xsd\" xmlns:core=\"rrn:org.xcbl:schemas/xcbl/v4_0/core/core.xsd\" xmlnssi=\"http://www.w3.org/2001/XMLSchema-instance\">', '<OrderList>', $FichierXml);
    $dataAsString = str_replace('core:', 'core_', $dataAsString);
    $dataAsString = utf8_encode(trim($dataAsString));

    $order_xml = simplexml_load_string($dataAsString);
    //error_log(print_r($order_xml, true));
    //$num_BdC = (string) $order_xml->ListOfOrder->Order->OrderHeader->OrderNumber->BuyerOrderNumber;


    $NomFichierXML = '../../documents/DSF_' . $orderId . '_' . $vardate . '.xml';

    file_put_contents($NomFichierXML, $XML, FILE_APPEND);
}

// pass our posted data (or nothing) to the soap service
$server->service((isset($HTTP_RAW_POST_DATA) ? $HTTP_RAW_POST_DATA : ''));
exit;



if (isset($_POST[xmldata0])) {
    $FichierXml = $_POST[xmldata0];
    $nbpacket = $_POST[nbpacket];
} else {
    $FichierXml = $_POST[xmldata];
}

$XML = str_replace('\"', '"', $FichierXml);

$FichierXml = str_replace('<?xml version=\"1.0\" encoding=\"UTF-8\"?>', '', $FichierXml);
//$FichierXml = str_replace('<OrderList xmlns=\"rrn:org.xcbl:schemas/xcbl/v4_0/ordermanagement/v1_0/ordermanagement.xsd\" xmlns:core=\"rrn:org.xcbl:schemas/xcbl/v4_0/core/core.xsd\" xmlnssi=\"http://www.w3.org/2001/XMLSchema-instance\">', '<OrderList>', $FichierXml);
$FichierXml = str_replace('core:', 'core_', $FichierXml);
$FichierXml = utf8_encode(trim($FichierXml));

$order_xml = simplexml_load_string($FichierXml);
$num_BdC = (string) $order_xml->ListOfOrder->Order->OrderHeader->OrderNumber->BuyerOrderNumber;


$NomFichierXML = '../../documents/DSF_' . $num_BdC . '_' . $vardate . '.xml';

file_put_contents($NomFichierXML, $XML, FILE_APPEND);
?>