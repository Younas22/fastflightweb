
// bottom button
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scrollToTopBtn").fadeIn();
    } else {
      $("#scrollToTopBtn").fadeOut();
    }
  });
  $("#scrollToTopBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});



    // show loading model of flights

    // function load_modal() {       

    //     // LOADING EFFECT
    //     // $("body").load('https://tazkira.ae/App/Views/Loading.php', {'root': 'https://tazkira.ae/'}).fadeIn();
        
    // };

    // URL beurify and search action
    // $("#flights-search").submit(function(e) {

    //     // event.preventDefault();
    //     e.preventDefault();
    //     // $("html, body").fadeOut(200);

    //     // $('.search_button').hide();
    //     // $('.loading_button').show();

    //     // $("html, body").fadeOut(200);

    //     var trip_type = $('input[name=trip]:checked').val();
    //     var origin = $(".origin").val().toLowerCase();
    //     var destination = $(".destination").val().toLowerCase();
    //     var departure_date = $("#departure").val();
    //     var return_date = $("#return_date").val();
    //     var flight_type = $("#flight_type").val().toLowerCase();
    //     var adult = $("#fadults").val();
    //     var children = $("#fchilds").val();
    //     var infant = $("#finfant").val();
    //     var language = $('#language').val();
    //     var origin_split = origin.split(' ');
    //     var origin = origin_split[0];
    //     var destination_split = destination.split(' ');
    //     var destination = destination_split[0];

    //     if(origin === destination) {
    //         console.log('or', origin)
    //         console.log('des', destination)
    //         alert('Flying City and Destination City Can`t be same');
    //     } else if (origin == '') {
    //         alert('add origin');
    //         $('.origin').focus();
    //     } else if (destination == '') {
    //         alert('add dest');
    //         $('.destination').focus();

    //         // main params of get url
    //     } else {
    //         $('.search_button').hide();
    //         $('.loading_button').show();
    //         var actionURL = 'flights/';

    //         // for oneway
    //         if (trip_type == 'oneway') {
    //             var finelURL = actionURL + origin + '/' + destination + '/' + trip_type + '/' + flight_type + '/' +
    //             departure_date + '/' + adult + '/' + children + '/' + infant;
    //             $("html, body").animate({
    //                 scrollTop: 0
    //             }, "fast");
    //             window.location.href = 'https://tazkira.ae/' + finelURL;
    //             load_modal();

    //             // Pace.restart();
    //             // Pace.start();

    //             // for return
    //         } else if (trip_type == 'return') {
    //             let date1 = new Date(departure_date);
    //             let date2 = new Date(return_date);

    //             if(date1 >= date2) {
    //                 alert('Departue Date must be below the Return Date')
    //             }
    //             else {
    //                 var finelURL = actionURL + origin + '/' + destination + '/' + trip_type + '/' + flight_type + '/' +
    //                 departure_date + '/' + return_date + '/' + adult + '/' + children + '/' + infant;
    //                 $("html, body").animate({
    //                     scrollTop: 0
    //                 }, "fast");
    //                 window.location.href = 'https://tazkira.ae/' + finelURL;
    //                 load_modal();
    //             }

    //             // for multi way
    //         } else {
    //             var finelURL = actionURL + trip_type + '/' + origin + '/' + destination + '/' + cdeparture + '/' +
    //                 origin + '/' + destination + '/' + cdeparture + '/' + origin + '/' + destination + '/' +
    //                 departure_date + '/' + flight_type + '/' + adult + '/' + children + '/' + infant;
    //             $("html, body").animate({
    //                 scrollTop: 0
    //             }, "fast");
    //             window.location.href = 'https://tazkira.ae/' + finelURL;
    //             load_modal();

    //         }
    //     }
    // });

    window.onload = function() {

        /* oneway */
        document.getElementById("one-way").onclick = function() {
            document.getElementById("show").className = "col hide";
            document.getElementById("onereturn").className = "row g-2 contact-form-action";
            document.getElementById("multiway").className = "";
            document.getElementById("departure").className = "depart form-control";
        }

        /* return */
        document.getElementById("round-trip").onclick = function() {
            document.getElementById("show").className = "col show_";
            document.getElementById("onereturn").className = "row g-2 contact-form-action";
            document.getElementById("multiway").className = "";
            document.getElementById("departure").className = "depart form-control dateleft border-top-r0";
        }

        /* multiway */
        document.getElementById("multi-trip").onclick = function() {
            document.getElementById("multiway").className = "multi-flight-wrap show_ mt-2";
            document.getElementById("show").className = "col hide";
            document.getElementById("departure").className = "depart form-control";
        }

    };
   
    document.getElementById("show").className = "col show_";
    document.getElementById("onereturn").className = "row contact-form-action g-2";
    document.getElementById("multiway").className = "";
    document.getElementById("departure").className = "depart form-control dateleft";
    

    function addSelect2() {

        // select 2 location init for hotels search 
        var $ajax = $(".flight_location");
    
        function formatRepo(t) {
            return t.loading ? t.text : (console.log(t),
                '<button style="font-size: 12px; font-weight: bold;" class="btn btn-outline-primary btn-sm mx-0">' + t.id +
                '</button><div class="mx-2" style="line-height: 14px;"><strong>' + t.city + '<small class="px-1">'+ t.country + '</small>' +
                '</strong><div class="d-block"><small>' + t.airport + '<small></div></div>')
        }

        function formatRepoSelection(t) {
    
            if (typeof t.city === 'undefined') {
                var city = "";
            } else {
                var city = t.city;
            }
    
            return '<div class="mt-2">' + city + ' ' + '<small><strong class="mt-2">' + t.id +
                ' </strong></small></div>'
        }

        $ajax.select2({
            ajax: {
                url: "https://tazkira.ae/api/flights_locations",
                dataType: "json",
                data: function(t) {
                    return {
                        city: $.trim(t.term)
                    }
                },
                processResults: function(t) {
                    console.log(t)
                    var e = [];
                    return t.forEach(function(t) {
    
                        e.push({
                            id: t.code,
                            city: t.city,
                            country: t.country,
                            airport: t.airport,
    
                        })
    
                    }), console.log(e), {
                        results: e
                    }
                },
                cache: !0
            },
            escapeMarkup: function(t) {
                return t
            },
            minimumInputLength: 3,
            templateResult: formatRepo,
            templateSelection: formatRepoSelection,
            dropdownPosition: 'below',
            cache: !0
        });
    }

    addSelect2();

    let _mostPolpularFlights;

    $(document).on('select2:open', function(e) {
        document.querySelector('.select2-search__field').focus();
        
        if( ($('input[type="radio"]:checked').val() === 'oneway' || $('input[type="radio"]:checked').val() === 'return') && $(e.target).parents('#flights-search').length !== 0  ) {
            if( $(e.target).parents('.from_flights').length !== 0 ) {
                setTimeout(() => $('.select2-results > ul > li').hide(), 10)
                _mostPolpularFlights = document.querySelector('#most--popular-from').content.cloneNode(true);
                mostPopularFlights(e.target);
                
            }
            else if( $(e.target).parents('.to_flights').length !== 0 ) {
                setTimeout(() => $('#select2--results > li').hide(), 10)
                _mostPolpularFlights = document.querySelector('#most--popular-to').content.cloneNode(true);
                mostPopularFlights(e.target);

            }

        } 
    });


    function mostPopularFlights(_selectedId) {
        setTimeout(() => addEventFlights(_mostPolpularFlights, _selectedId), 10)
    }

    function addEventFlights(tempFlights, thisId) {
        let sibiling = $(thisId).siblings('.select2.select2-container')
        let change = $(sibiling).find('#select2--container > .mt-2')
        // let len = parent.querySelectorAll('div > .to--insert')
        let len = tempFlights.querySelectorAll('div > .to--insert')

        len.forEach(li => {
            li.addEventListener('click', function(e) { 
                // e.stopPropagation();
                let innerText = this.querySelector('.btn-outline-primary').textContent;
                let outterText = this.querySelector('div > strong').textContent;
                change.html( `${outterText} <small><strong class="mt-1"> ${innerText} </strong></small>` );

                $(thisId).find('option:not(:last-child)').remove() 
                thisId.querySelector('option').value = innerText;

                document.querySelector('.select2.select2-container.select2-container--default.select2-container--open').classList.remove('select2-container--open')

                document.querySelector('.select2-container.select2-container--default.select2-container--open:last-child').remove()

            })

        })
        $('.select2-results > ul').append(_mostPolpularFlights);
    }

    // SWAP LOCATIONS OF FLIGHTS
    jQuery.fn.swap = function(b) {
    b = jQuery(b)[0];
    var a = this[0],
    a2 = a.cloneNode(true),
    b2 = b.cloneNode(true),
    stack = this;

    a.parentNode.replaceChild(b2, a);
    b.parentNode.replaceChild(a2, b);

    stack[0] = a2;
    return this.pushStack( stack );
    };

    $('#swap').click(function() {
    var div = $('.from_flights option')
    .swap('.to_flights option')
    });





 $('#datepicker').datepicker({
            uiLibrary: 'bootstrap5'
        });