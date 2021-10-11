function generateHtml(teamManager, engineerArr, internArr) {

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" integrity="sha384-uWxY/CJNBR+1zjPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF" crossorigin="anonymous">
    <title>Team Profile</title>
</head>
<body>
    <div class="jumbotron bg-danger bg-gradient text-center text-light">
        <h1 class="p-5">My Team</h1>
    </div>
    <div class="mx-auto w-50">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
            <div class="card bg-light">
                <div class="card-header bg-primary text-left text-light">
                    <h3>${teamManager.name}</h3>
                    <h4>${teamManager.getRole()}</h4>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${teamManager.id}</li>
                        <li class="list-group-item">Email: ${teamManager.email}</li>
                        <li class="list-group-item">Office Number: ${teamManager.officeNumber}</li>
                    </ul>
                </div>
            </div>
            </div>
            ${generateEngineer(engineerArr)}
            ${generateIntern(internArr)}            
        </div>
    </div>
</body>
</html>
    `
}

function generateEngineer(data) {
    let e = ``;
    if(data != null) {
        for (i=0; i < data.length; i++) {
            e = `
            <div class="col">
            <div class="card bg-light">
                <div class="card-header bg-primary text-left text-light">
                    <h3>${data[i].name}</h3>
                    <h4>${data[i].getRole()}</h4>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${data[i].id}</li>
                        <li class="list-group-item">Email: ${data[i].email}</li>
                        <li class="list-group-item">GitHub: ${data[i].gitHub}</li>
                    </ul>
                </div>
            </div>
            </div>
            `;
            if (i > 0) {
                e = e + e;
            }
        }
        return e;
    } else {
        return ``
    }
}

function generateIntern(data) {
    let x = ``;
    if(data != null) {
        for (i=0; i < data.length; i++) {
            x = `
            <div class="col">
            <div class="card bg-light">
                <div class="card-header bg-primary text-left text-light">
                    <h3>${data[i].name}</h3>
                    <h4>${data[i].getRole()}</h4>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${data[i].id}</li>
                        <li class="list-group-item">Email: ${data[i].email}</li>
                        <li class="list-group-item">GitHub: ${data[i].gitHub}</li>
                    </ul>
                </div>
            </div>
            </div>
            `;
            if (i > 0) {
                x = x + x;
            }
        }
        return x;
    } else {
        return ``
    }
}

module.exports = generateHtml;