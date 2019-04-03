app.service('chatServices', function ($http) {
    try {
        this.getAllUsers = function ($scope, usertoken) {
            $http({
                method: 'GET',//assigning GET 
                url: 'http://localhost:3000/auth/getAllUser',
                headers: {
                    'token': usertoken,
                }
            }).then(
                function successCallback(response) {//call back function of http sevice
                    $scope.allUser = response.data.result;
                    console.log(response.data.result);
                    
                },
                function errorCallback(response) {
                    console.log("registration Unsuccessful ");
                    console.log(response);
                }
            );
        }
    }
    catch (err) {
        console.log("ERROR: here in getting users")
    }
    try {
        this.getUserMsg = function ($scope) {
            var arr = [];
            var usertoken = localStorage.getItem('token');
            $http({
                method: 'GET',//assigning GET 
                url: 'http://localhost:3000/auth/getUserMsg', 
                headers: {
                    'token': usertoken,
                }
            }).then(
                function successCallback(response) {
                   // console.log(response.data.result);

                    for (let i = 0; i < (response.data.result.length); i++) {  
                        a = response.data.result[i];
                        //console.log(a);

                        if (((localStorage.getItem('userid') == a.senderUserId) && 
                        (localStorage.getItem('ruserId') == a.receiverUserId)) || 
                        ((localStorage.getItem('userid') == a.receiverUserId &&
                         localStorage.getItem('ruserId') == a.senderUserId))) {
                            console.log("local user is ", localStorage.getItem('userid'), "a user is ", a.senderUserId, " local receiver id is ", localStorage.getItem('ruserId'), "  receiver is ", a.receiverUserId);
                            arr.push(a);
                        }

                    }
                    $scope.allUserArr = arr;
                    console.log("User's message was sent successfully ", arr);

                },
                function errorCallback(response) {
                    console.log("Unsuccessful ");
                    console.log(response);

                }
            );
        }
    }
    catch (err) {
        console.log("ERROR: in getting the message")
    }

})
