// Make an AJAX GET request to the API endpoint
$.ajax({
    url: "https://example.com/api/sales-history",
    method: "GET",
    success: function (data) {
        // Dynamically populate the table in HTML with the data returned by the API
        var tableBody = "";
        $.each(data, function (index, sale) {
            tableBody += "<tr>";
            tableBody += "<td><div class='product'><div class='image'><img src='" + sale.productImage + "' alt='' /></div><p class='text-sm'>" + sale.productName + "</p></div></td>";
            tableBody += "<td><p class='text-sm'>" + sale.category + "</p></td>";
            tableBody += "<td><p class='text-sm'>" + sale.revenue + "</p></td>";
            tableBody += "<td><span class='status-btn " + sale.statusClass + "'>" + sale.status + "</span></td>";
            tableBody += "<td><div class='action justify-content-end'><button class='edit'><i class='lni lni-pencil'></i></button><button class='more-btn ml-10 dropdown-toggle' id='moreAction1' data-bs-toggle='dropdown' aria-expanded='false'><i class='lni lni-more-alt'></i></button><ul class='dropdown-menu dropdown-menu-end' aria-labelledby='moreAction1'><li class='dropdown-item'><a href='#0' class='text-gray'>Remove</a></li><li class='dropdown-item'><a href='#0' class='text-gray'>Edit</a></li></ul></div></td>";
            tableBody += "</tr>";
        });
        $(".top-selling-table tbody").html(tableBody);
    },
    error: function (jqXHR, textStatus, errorThrown) {
        console.log("AJAX error: " + textStatus + ' : ' + errorThrown);
    }
});
// make HTTP GET request to the endpoint
// fetch("http://localhost:8080/api/v1/services")
//     .then(response => response.json()) // parse response as JSON
//     .then(data => {
//         // generate HTML elements to display data
//         const card = document.createElement('div');
//         card.classList.add('card-style', 'mb-30');

//         const title = document.createElement('div');
//         title.classList.add('title', 'd-flex', 'flex-wrap', 'align-items-center', 'justify-content-between');
//         title.innerHTML = '<div class="left"><h6 class="text-medium mb-30">Sales History</h6></div><div class="right"><div class="select-style-1"><div class="select-position select-sm"><select class="light-bg"><option value="">Today</option><option value="">Yesterday</option></select></div></div></div>';

//         const table = document.createElement('div');
//         table.classList.add('table-responsive');
//         table.innerHTML = '<table class="table top-selling-table"><thead><tr><th><h6 class="text-sm text-medium">Products</h6></th><th class="min-width"><h6 class="text-sm text-medium">Category <i class="lni lni-arrows-vertical"></i></h6></th><th class="min-width"><h6 class="text-sm text-medium">Revenue <i class="lni lni-arrows-vertical"></i></h6></th><th class="min-width"><h6 class="text-sm text-medium">Status <i class="lni lni-arrows-vertical"></i></h6></th><th><h6 class="text-sm text-medium text-end">Actions <i class="lni lni-arrows-vertical"></i></h6></th></tr></thead><tbody><tr><td><div class="product"><div class="image"><img src="' + data.service_images + '" alt=""/></div><p class="text-sm">' + data.products.name + '</p></div></td><td><p class="text-sm">' + data.category_name + '</p></td><td><p class="text-sm">' + data.products.price + '</p></td><td><span class="status-btn close-btn">' + data.is_available + '</span></td><td><div class="action justify-content-end"><button class="edit"><i class="lni lni-pencil"></i></button><button class="more-btn ml-10 dropdown-toggle" id="moreAction1" data-bs-toggle="dropdown" aria-expanded="false"><i class="lni lni-more-alt"></i></button><ul class="dropdown-menu dropdown-menu-end" aria-labelledby="moreAction1"><li class="dropdown-item"><a href="#0" class="text-gray">Remove</a></li><li class="dropdown-item"><a href="#0" class="text-gray">Edit</a></li></ul></div></td></tr></tbody></table>';

//         card.appendChild(title);
//         card.appendChild(table);

//         // append card to document body
//         document.querySelector('.col-lg-7').appendChild(card);
//     })
//     .catch(error => console.error(error)); // handle error if any
