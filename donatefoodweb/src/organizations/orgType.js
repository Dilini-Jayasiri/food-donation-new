const KEYS = {
    requests : 'requests',
    requestId : 'requestID'
}


export const getOrgCollection = () =>([
    { id : '1' ,title: 'Children Home'},
    { id : '2', title: 'Old Age Home'},
    { id : '3', title: 'Non Government Organization'},
    { id : '4', title: 'Other'}
])


export function insertRequests(data){
    let requests = getAllRequests();
    data['id'] = generateRequestId();
    requests.push(data);
    localStorage.setItem(KEYS.requests,JSON.stringify(requests));
}

export function generateRequestId() {
    if(localStorage.getItem(KEYS.requestId) == null)
    localStorage.setItem(KEYS.requestId,'0')

    var id = parseInt(localStorage.getItem(KEYS.requestId))
    localStorage.setItem(KeyboardEvent.requestId,(++id).toString())
    return id;
}


export function getAllRequests(){
    if(localStorage.getItem(KEYS.requests) == null)
       localStorage.setItem(KEYS.requests,JSON.stringify([]))
    let requets= JSON.parse(localStorage.getItem(KEYS.requests));
    //map orgTypeId to organization
    let orgs= getOrgCollection();
    return requets.map(x => ({
        ...x,
        orgType: orgs[x.orgTypeId - 1].title
    }))
}

