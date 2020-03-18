$(document).ready(function(){

    $.get('https://cors-anywhere.herokuapp.com/https://aqueous-cove-10743.herokuapp.com/info', function(data){
        console.log(data)

        var length = data.Titles.length

        var title_checker = []

        // Drop duplicates by title

        for (i = 0 ; i < length ; i++){
            
            // As long as it is a unique title, continue to map it to html
            if (title_checker.includes(data.Titles[i])){
                continue
            } else{
                // Push it to the checker list 
                title_checker.push(data.Titles[i])

                var date = new Date((data.Times[i] * 1000))

                var day = date.getDate()

                var month = date.getMonth()+1

                const lookup = {
                    1:'January', 
                    2:'February', 
                    3:'March', 
                    4:'April', 
                    5:'May', 
                    6:'June', 
                    7:'July', 
                    8:'August',
                    9:'September',
                    10:'October',
                    11:'November',
                    12:'December'
                }

                var date_sub = lookup[month] + ' ' + day

                // Append a child to info row
                $("#info").append(

                    "<div class='col py-2'><div class='card m-4 p-2 h-100' style='width: 18rem'><div class='card-body d-flex flex-column'><p class='card-text'>" + 
                    data.Titles[i] + "</p><h6 class='card-subtitle mb-2 text-muted'>" + 
                    date_sub + "</h6><a class='btn btn-success mt-auto' href='" + data.Links[i] + "'>Article Link</a></div></div></div>"

                )


            }


        }

        
        
    })



})