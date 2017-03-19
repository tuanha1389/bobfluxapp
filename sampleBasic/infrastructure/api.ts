
const secessionId = '';

export interface IHttpRequest {
    url: string;
    callBack: (result: any) => void;
}

export function processLogedIn(secessionId: string) {
    secessionId = secessionId;
}

export function get(request: IHttpRequest) {

    var xmlhttp = new XMLHttpRequest();

    setHttpRequestHeader(xmlhttp);

    xmlhttp.onreadystatechange = () => onreadystatechange(xmlhttp, request);

    xmlhttp.open('GET', request.url, true);
    xmlhttp.send();
}

export function post(request: IHttpRequest) {

    var xmlhttp = new XMLHttpRequest();

    setHttpRequestHeader(xmlhttp);

    xmlhttp.onreadystatechange = () => onreadystatechange(xmlhttp, request);

    xmlhttp.open('POST', request.url, true);
    xmlhttp.send();
}

function onreadystatechange(xmlhttp: XMLHttpRequest, request: IHttpRequest) {

    if (xmlhttp.readyState == XMLHttpRequest.DONE) {

        if (xmlhttp.status == 200) {
            request.callBack(JSON.parse(xmlhttp.responseText))
        } else if (xmlhttp.status == 400) {
            throw 'There was an error 400';
        } else {
            throw 'something else other than 200 was returned';
        }
    }
}

function setHttpRequestHeader(xmlhttp: XMLHttpRequest) {    
    xmlhttp.setRequestHeader('secessionId', secessionId);
}

export function encodeQueryData(data: any) {
    let ret = [];
    for (let d in data)
        ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    return ret.join('&');
}