
    const setApp = document.getElementById('app10');
    const setApptb = document.getElementById('settingstb');
    const setWindow = document.getElementById('settingswindow');
    const setClose = document.getElementById('settingsclose');



    setApp.addEventListener('click', () => {
        setWindow.style.display = 'block';
    });

    setApptb.addEventListener('click', () => {
        setWindow.style.display = 'block';
    });

    setClose.addEventListener('click', () => {
        setWindow.style.display = 'none';
    });





    const notepadApp = document.getElementById('app1');
    const notepadApptb = document.getElementById('taskbar-notepad');
    const notepadWindow = document.getElementById('notepad-window');
    const notepadClose = document.getElementById('notepad-close');
    const notepadContent = document.querySelector('#notepad-window .window-content');
    const notepadSave = document.getElementById('notepad-save');



    notepadApp.addEventListener('click', () => {
        notepadWindow.style.display = 'block';
    });

    notepadApptb.addEventListener('click', () => {
        notepadWindow.style.display = 'block';
    });

    notepadClose.addEventListener('click', () => {
        notepadContent.textContent = '';
        notepadWindow.style.display = 'none';
    });


    // Placeholder behavior for Notepad
    notepadContent.addEventListener('focus', () => {
        notepadContent.classList.remove('placeholder');
    });

    notepadContent.addEventListener('blur', () => {
        if (!notepadContent.textContent.trim()) {
            notepadContent.classList.add('placeholder');
        }
    });

  notepadSave.addEventListener('click', () => {
    const textToSave = notepadContent.textContent;
    const blob = new Blob([textToSave], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'notepad.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  });




    const paintApp = document.getElementById('app7');
    const paintApptb = document.getElementById('painttimetb');
    const canvasWindow = document.getElementById('canvaswindow');
    const canvasClose = document.getElementById('canvasclose');
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const brushColor = document.getElementById('brushColor');
        const brushSize = document.getElementById('brushSize');
        const brushType = document.getElementById('brushType');
        const fillBucket = document.getElementById('fillBucket');
        const clearCanvas = document.getElementById('clearCanvas');
        const saveImage = document.getElementById('saveImage');
        let painting = false;

 canvas.width = 700;
        canvas.height = 450;


        ctx.lineWidth = brushSize.value;
        ctx.lineCap = brushType.value;

        brushColor.addEventListener('input', () => {
            ctx.strokeStyle = brushColor.value;
        });

        brushSize.addEventListener('input', () => {
            ctx.lineWidth = brushSize.value;
        });

        brushType.addEventListener('change', () => {
            ctx.lineCap = brushType.value;
        });

        fillBucket.addEventListener('click', () => {
            const fillColor = brushColor.value;
            ctx.fillStyle = fillColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        });

        clearCanvas.addEventListener('click', () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        });

        saveImage.addEventListener('click', () => {
            const image = canvas.toDataURL('image/png');
            const a = document.createElement('a');
            a.href = image;
            a.download = 'my_painting.png';
            a.click();
        });

        canvas.addEventListener('mousedown', () => {
            painting = true;
        });

        canvas.addEventListener('mouseup', () => {
            painting = false;
            ctx.beginPath();
        });

        canvas.addEventListener('mousemove', draw);

        function draw(e) {
            if (!painting) return;

            ctx.lineJoin = 'round';
            ctx.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
        }




    paintApp.addEventListener('click', () => {
        canvasWindow.style.display = 'block';
    });

    painttimetb.addEventListener('click', () => {
        canvasWindow.style.display = 'block';
    });

    canvasClose.addEventListener('click', () => {
        canvasWindow.style.display = 'none';
    });



    const watchTunnelApp = document.getElementById('app2');
    const watchTunnelApptb = document.getElementById('taskbar-watch-tunnel');
    const watchTunnelWindow = document.getElementById('watch-tunnel-window');
    const watchTunnelClose = document.getElementById('watch-tunnel-close');



    watchTunnelApp.addEventListener('click', () => {
        watchTunnelWindow.style.display = 'block';
    });

    watchTunnelApptb.addEventListener('click', () => {
        watchTunnelWindow.style.display = 'block';
    });

    watchTunnelClose.addEventListener('click', () => {
        watchTunnelWindow.style.display = 'none';
    });



    const jokesApp = document.getElementById('app9');
    const jokesApptb = document.getElementById('joketb');
    const jokesWindow = document.getElementById('jokewindow');
    const jokesClose = document.getElementById('jokeclose');



    jokesApp.addEventListener('click', () => {
        jokesWindow.style.display = 'block';
    });

    jokesApptb.addEventListener('click', () => {
        jokesWindow.style.display = 'block';
    });

    jokesClose.addEventListener('click', () => {
        jokesWindow.style.display = 'none';
    });



    const watchTunnelApp1 = document.getElementById('app6');
    const watchTunnelApptb1 = document.getElementById('taskbar-watch-tunnel1');
    const watchTunnelWindow1 = document.getElementById('watch-tunnel-window1');
    const watchTunnelClose1 = document.getElementById('watch-tunnel-close1');



    watchTunnelApp1.addEventListener('click', () => {
        watchTunnelWindow1.style.display = 'block';
    });

    watchTunnelApptb1.addEventListener('click', () => {
        watchTunnelWindow1.style.display = 'block';
    });

    watchTunnelClose1.addEventListener('click', () => {
        watchTunnelWindow1.style.display = 'none';
    });




    const ShopApp = document.getElementById('app3');
    const shoponlinetb = document.getElementById('shoponlinetb');
    const shopWindow = document.getElementById('shopwindow');
    const shoplose = document.getElementById('shopclose');



    ShopApp.addEventListener('click', () => {
        shopWindow.style.display = 'block';
    });

    shoponlinetb.addEventListener('click', () => {
        shopWindow.style.display = 'block';
    });

    shoplose.addEventListener('click', () => {
        shopWindow.style.display = 'none';
    });





    const calcApp = document.getElementById('app5');
    const calcApptb = document.getElementById('calcApptb');
    const calcWindow = document.getElementById('calcwindow');
    const calcContent = document.querySelector('#calcwindow .window-content');
    const calcClose = document.getElementById('calcclose');



    calcApp.addEventListener('click', () => {
        calcWindow.style.display = 'block';
    });

    calcApptb.addEventListener('click', () => {
        calcWindow.style.display = 'block';
    });

    calcClose.addEventListener('click', () => {
        calcWindow.style.display = 'none';
    });



    const searchapp = document.getElementById('app4');
    const searchapptb = document.getElementById('tbsearch');
    const searchwindow = document.getElementById('searchwindow');
    const searchClose = document.getElementById('searchclose');



    searchapp.addEventListener('click', () => {
        searchwindow.style.display = 'block';
    });

    searchapptb.addEventListener('click', () => {
        searchwindow.style.display = 'block';
    });

    searchClose.addEventListener('click', () => {
        searchwindow.style.display = 'none';
    });


   const quotesapp = document.getElementById('app8');
    const quotesapptb = document.getElementById('quotestb');
    const quoteswindow = document.getElementById('quoteswindow');
    const quotesClose = document.getElementById('quotesclose');



    quotesapp.addEventListener('click', () => {
        quoteswindow.style.display = 'block';
    });

    quotesapptb.addEventListener('click', () => {
        quoteswindow.style.display = 'block';
    });

    quotesClose.addEventListener('click', () => {
        quoteswindow.style.display = 'none';
    });




    const vid1 = document.getElementById('vid1');
    const vid1vid = document.getElementById('vid1window');
    const vid1Close = document.getElementById('vid1close');

    vid1.addEventListener('click', () => {
        vid1vid.style.display = 'block';
    });

    vid1Close.addEventListener('click', () => {
        vid1vid.style.display = 'none';
    });


    const vid2 = document.getElementById('vid2');
    const vid2vid = document.getElementById('vid2window');
    const vid2Close = document.getElementById('vid2close');

    vid2.addEventListener('click', () => {
        vid2vid.style.display = 'block';
    });

    vid2Close.addEventListener('click', () => {
        vid2vid.style.display = 'none';
    });


    const vid3 = document.getElementById('vid3');
    const vid3vid = document.getElementById('vid3window');
    const vid3Close = document.getElementById('vid3close');

    vid3.addEventListener('click', () => {
        vid3vid.style.display = 'block';
    });

    vid3Close.addEventListener('click', () => {
        vid3vid.style.display = 'none';
    });


    const vid4 = document.getElementById('vid4');
    const vid4vid = document.getElementById('vid4window');
    const vid4Close = document.getElementById('vid4close');

    vid4.addEventListener('click', () => {
        vid4vid.style.display = 'block';
    });

    vid4Close.addEventListener('click', () => {
        vid4vid.style.display = 'none';
    });

    const vid5 = document.getElementById('vid5');
    const vid5vid = document.getElementById('vid5window');
    const vid5Close = document.getElementById('vid5close');

    vid5.addEventListener('click', () => {
        vid5vid.style.display = 'block';
    });

    vid5Close.addEventListener('click', () => {
        vid5vid.style.display = 'none';
    });


    const vid6 = document.getElementById('vid6');
    const vid6vid = document.getElementById('vid6window');
    const vid6Close = document.getElementById('vid6close');

    vid6.addEventListener('click', () => {
        vid6vid.style.display = 'block';
    });

    vid6Close.addEventListener('click', () => {
        vid6vid.style.display = 'none';
    });

    const vid7 = document.getElementById('vid7');
    const vid7vid = document.getElementById('vid7window');
    const vid7Close = document.getElementById('vid7close');

    vid7.addEventListener('click', () => {
        vid7vid.style.display = 'block';
    });

    vid7Close.addEventListener('click', () => {
        vid7vid.style.display = 'none';
    });

    const vid8 = document.getElementById('vid8');
    const vid8vid = document.getElementById('vid8window');
    const vid8Close = document.getElementById('vid8close');


    vid8.addEventListener('click', () => {
        vid8vid.style.display = 'block';
    });

    vid8Close.addEventListener('click', () => {
        vid8vid.style.display = 'none';
    });








    const pic1 = document.getElementById('pic1');
    const pic1vid = document.getElementById('pic1window');
    const pic1Close = document.getElementById('pic1close');

    pic1.addEventListener('click', () => {
        pic1vid.style.display = 'block';
    });

    pic1Close.addEventListener('click', () => {
        pic1vid.style.display = 'none';
    });


    const pic2 = document.getElementById('pic2');
    const pic2vid = document.getElementById('pic2window');
    const pic2Close = document.getElementById('pic2close');

    pic2.addEventListener('click', () => {
        pic2vid.style.display = 'block';
    });

    pic2Close.addEventListener('click', () => {
        pic2vid.style.display = 'none';
    });


    const pic3 = document.getElementById('pic3');
    const pic3vid = document.getElementById('pic3window');
    const pic3Close = document.getElementById('pic3close');

    pic3.addEventListener('click', () => {
        pic3vid.style.display = 'block';
    });

    pic3Close.addEventListener('click', () => {
        pic3vid.style.display = 'none';
    });


    const pic4 = document.getElementById('pic4');
    const pic4vid = document.getElementById('pic4window');
    const pic4Close = document.getElementById('pic4close');

    pic4.addEventListener('click', () => {
        pic4vid.style.display = 'block';
    });

    pic4Close.addEventListener('click', () => {
        pic4vid.style.display = 'none';
    });

    const pic5 = document.getElementById('pic5');
    const pic5vid = document.getElementById('pic5window');
    const pic5Close = document.getElementById('pic5close');

    pic5.addEventListener('click', () => {
        pic5vid.style.display = 'block';
    });

    pic5Close.addEventListener('click', () => {
        pic5vid.style.display = 'none';
    });


    const pic6 = document.getElementById('pic6');
    const pic6vid = document.getElementById('pic6window');
    const pic6Close = document.getElementById('pic6close');

    pic6.addEventListener('click', () => {
        pic6vid.style.display = 'block';
    });

    pic6Close.addEventListener('click', () => {
        pic6vid.style.display = 'none';
    });

    const pic7 = document.getElementById('pic7');
    const pic7vid = document.getElementById('pic7window');
    const pic7Close = document.getElementById('pic7close');

    pic7.addEventListener('click', () => {
        pic7vid.style.display = 'block';
    });

    pic7Close.addEventListener('click', () => {
        pic7vid.style.display = 'none';
    });

    const pic8 = document.getElementById('pic8');
    const pic8vid = document.getElementById('pic8window');
    const pic8Close = document.getElementById('pic8close');


    pic8.addEventListener('click', () => {
        pic8vid.style.display = 'block';
    });

    pic8Close.addEventListener('click', () => {
        pic8vid.style.display = 'none';
    });



    const elementsToChangeColor = document.querySelectorAll('canvas, .button123, .buttonegg, .vid, .taskbar-app, .pic, .container, #search-bar, .custom-button');
    let colorIndex = 0;
    const colors = ['blue', '#00ff00', '#0000ff', 'cyan', 'purple', 'magenta', 'yellow', 'olive', 'gold', 'maroon', 'teal', 'lavender', 'gray', 'orange']; // You can add more colors

    function changeColors() {
      colorIndex = (colorIndex + 1) % colors.length;
      const color = colors[colorIndex];

      elementsToChangeColor.forEach(element => {
        element.style.borderColor = color;
      });
    }

    setInterval(changeColors, 700); // Change border colors every 0.7 seconds

    function searchOnEnter(event) {
      if (event.key === 'Enter') {
        const query = document.getElementById('search-bar').value;
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;


    window.open(searchUrl, '_blank');
      }
    }

    // Clear the search input when the page is reloaded
    window.onload = function() {
      document.getElementById('search-bar').value = '';
    };

    // JavaScript code for creating fireflies
    function createFireflies() {
      const container = document.querySelector('.fireflies-container');
      const numFireflies = 5; // Number of fireflies you want every 600ms

      setInterval(() => {
        for (let i = 0; i < numFireflies; i++) {
          const firefly = document.createElement('div');
          firefly.className = 'firefly';
          const x = Math.random() * 100; // Random X position
          const y = Math.random() * 100; // Random Y position
          const randomColor = getRandomColor(); // Get a random color
          firefly.style.left = `${x}%`;
          firefly.style.top = `${y}%`;
          firefly.style.backgroundColor = randomColor;
          container.appendChild(firefly);

          setTimeout(() => {
            container.removeChild(firefly);
          }, 5000); // Remove firefly after 5 seconds
        }
      }, 300); // Add fireflies every 600 milliseconds
    }

    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    createFireflies();


        let input = '';
        const resultElement = document.getElementById('result');

        function appendToInput(value) {
            input += value;
            resultElement.textContent = input;
        }

        function calculateResult() {
            try {
                input = eval(input).toString();
                resultElement.textContent = input;
            } catch (error) {
                resultElement.textContent = 'Error';
                input = '';
            }
        }

        function clearInput() {
            input = '';
            resultElement.textContent = '0';
        }


const buttons = document.querySelectorAll('.buttonegg');
const rightPanel = document.querySelector('.right-panel');

function addButton1Content() {
  // Check if the screen width is below a certain threshold (e.g., 600 pixels for phones)
  const isPhone = window.innerWidth < 600;

  // Define the image URLs
  const imageUrls = [
    'im1.jpg', 'im2.jpg', 'im3.jpg', 'im4.jpg', 'im5.jpg',
    'im6.jpg', 'im7.jpg', 'im8.jpg', 'im9.jpg', 'im10.jpg'
  ];

  // Calculate the number of images per row based on the screen width
  const imagesPerRow = isPhone ? 3 : 5;

  // Generate the HTML for image buttons
  let html = '<br><br>';
  for (let i = 0; i < imageUrls.length; i += imagesPerRow) {
    html += '<div class="image-buttons">';
    for (let j = i; j < i + imagesPerRow && j < imageUrls.length; j++) {
      html += `<button class="image-button" style="background-image: url('${imageUrls[j]}')" onclick="changeBackground('${imageUrls[j]}')"></button>`;
    }
    html += '</div>';
  }

  // Set the HTML content of rightPanel
  rightPanel.innerHTML = html;
}

        function addButton2Content() {
            rightPanel.innerHTML = `

<h2>Font Size: </h2>
                <div class="image-buttons">
<button class="image-button1" onclick="changeFontSize(10)">Small</button>
<button class="image-button1" onclick="changeFontSize(20)">Medium</button>
<button class="image-button1" onclick="changeFontSize(30)">Big</button>
                </div>
<br>

<h2>Font Color: </h2>
                <div class="image-buttons">
<button class="image-button1" onclick="changeFontColor('red')">Red</button>
<button class="image-button1" onclick="changeFontColor('blue')">Blue</button>
<button class="image-button1" onclick="changeFontColor('green')">Green</button>
                </div>


<h2>Font Type: </h2>
                <div class="image-buttons">
<button class="image-button1"  style="font-family:'Curlz MT' " onclick="changeFontFamily('Curlz MT')">Curlz MT</button>
<button class="image-button1"  style="font-family:'Blackadder ITC' " onclick="changeFontFamily('Blackadder ITC')">Blackadder ITC</button>
<button class="image-button1"  style="font-family:'Bradley Hand ITC' " onclick="changeFontFamily('Bradley Hand ITC')">Bradley Hand ITC</button>

                </div>

            `;
        }


        function addButton4Content() {
            rightPanel.innerHTML = `
<h3>About the Website: </h3>
<h4>
Dive into an intricately crafted web OS that artfully replicates the gaming ecosystem.
This labor of love consumed an entire month, resulting in a meticulously designed platform
featuring a diverse array of 10 indispensable applications.

</h4>
<h3>About the Idea of the Website: </h3>
<h4>
Bored with the mundane Windows 10 experience and driven by a fervor for gaming, the concept of
crafting our unique operating system was born. The journey to develop a full-scale OS akin to Windows was 
ambitious, but we began humbly, allowing room for future enhancements. Our aspiration is to offer a 
transformative computing experience that caters to gamers and those seeking a dynamic digital world.
</h4>

            `;
        }

        function addButton3Content() {
            rightPanel.innerHTML = `
<h2>We appreciate your Support!!</h2>

<h3> 1 Dollar $ </h3>
<nav>

        <a href="./1-dollar-donation" target="_blank">
            <button class="donation-button">Go to 1 Dollar Donation Page</button>
        </a>

</nav>
<h3> 5 Dollars $ </h3>
<nav>

        <a href="./5-dollar-donation" target="_blank">
            <button class="donation-button">Go to 5 Dollars Donation Page</button>
        </a>

</nav>
<h3> 10 Dollars $ </h3>
<nav>

        <a href="./10-dollar-donation" target="_blank">
            <button class="donation-button">Go to 10 Dollars Donation Page</button>
        </a>

</nav>
<h3> 30 Dollars $ </h3>
<nav>

        <a href="./30-dollar-donation" target="_blank">
            <button class="donation-button">Go to 30 Dollars Donation Page</button>
        </a>

</nav>


        `}


        function changeBackground(imageUrl) {
            document.body.style.backgroundImage = `url(${imageUrl})`;
        }

function changeFontSize(fontSize) {
    document.body.style.fontSize = fontSize + 'px';
}

function changeFontColor(color) {
    document.body.style.color = color;
}


        function changeFontFamily(fontFamily) {
            document.body.style.fontFamily = fontFamily;
        }
    

        buttons[0].addEventListener('click', addButton1Content);
        buttons[1].addEventListener('click', addButton2Content);
        buttons[2].addEventListener('click', addButton3Content);
        buttons[3].addEventListener('click', addButton4Content);





        const quotes = [
            "The only way to do great work is to love what you do. - Steve Jobs",
            "In the middle of every difficulty lies opportunity. - Albert Einstein",
            "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
            "The best way to predict the future is to create it. - Peter Drucker",
            "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
            "Don't count the days, make the days count. - Muhammad Ali",
            "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
            "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
            "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible. - Joel Brown",
            "Believe you can and you're halfway there. - Theodore Roosevelt",
            "The way to get started is to quit talking and begin doing. - Walt Disney",
            "You miss 100% of the shots you don't take. - Wayne Gretzky",
            "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
            "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
            "The only person you should try to be better than is the person you were yesterday. - Unknown",
            "Life is what happens when you're busy making other plans. - John Lennon",
            "It does not matter how slowly you go as long as you do not stop. - Confucius",
            "You can't go back and change the beginning, but you can start where you are and change the ending. - C.S. Lewis",
            "Dream big and dare to fail. - Norman Vaughan",
            "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
            "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
            "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
            "The harder I work, the luckier I get. - Samuel Goldwyn",
            "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
            "It always seems impossible until it's done. - Nelson Mandela",
            "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. - Steve Jobs",
            "The secret of getting ahead is getting started. - Mark Twain",
            "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
            "Opportunities don't happen. You create them. - Chris Grosser",
            "The future depends on what you do today. - Mahatma Gandhi",
        ];

        const quoteElement = document.getElementById("quote");
        const prevButton = document.getElementById("prev");
        const nextButton = document.getElementById("next");

        let currentIndex = 0;

        function displayQuote(index) {
            quoteElement.textContent = quotes[index];
        }

        displayQuote(currentIndex);

        prevButton.addEventListener("click", () => {
            if (currentIndex === 0) {
                currentIndex = quotes.length - 1;
            } else {
                currentIndex--;
            }
            displayQuote(currentIndex);
        });

        nextButton.addEventListener("click", () => {
            if (currentIndex === quotes.length - 1) {
                currentIndex = 0;
            } else {
                currentIndex++;
            }
            displayQuote(currentIndex);
        });



		
		// Check if the screen width is below a certain threshold (e.g., 600 pixels for phones)
if (window.innerWidth < 600) {
  document.getElementById("paintcontent").innerHTML = "<h1> Not Available For Mobile Phones<br> Please Use a PC or Laptop! </h1>";

  document.getElementById("app1").innerHTML = "Notepad";
  document.getElementById("app2").innerHTML = "Watch";
  document.getElementById("app3").innerHTML = "ShopOnline";
  document.getElementById("app4").innerHTML = "Toggle";
  document.getElementById("app5").innerHTML = "Calculator";
  document.getElementById("app6").innerHTML = "Gallery";
  document.getElementById("app7").innerHTML = "Paint";
  document.getElementById("app8").innerHTML = "Quotes";
  document.getElementById("app9").innerHTML = "Jokes";
  document.getElementById("app10").innerHTML = "Settings";
  

  }






        const jokes = [
            "Why don't scientists trust atoms? Because they make up everything.",
            "Parallel lines have so much in common. It's a shame they'll never meet.",
            "I told my wife she was drawing her eyebrows too high. She looked surprised.",
            "Why did the scarecrow win an award? Because he was outstanding in his field.",
            "Why don't skeletons fight each other? They don't have the guts.",
            "I'm reading a book on anti-gravity. It's impossible to put down.",
            "I used to play piano by ear, but now I use my hands.",
            "What do you get when you cross a snowman and a vampire? Frostbite.",
            "How do you organize a space party? You planet.",
            "I'm friends with all electricians. We have such great current connections.",
            "I used to be a baker, but I couldn't make enough dough.",
            "How do you catch a squirrel? Climb a tree and act like a nut!",
            "Why don't some couples go to the gym? Because some relationships don't work out.",
            "Why did the tomato turn red? Because it saw the salad dressing.",
            "I couldn't figure out why the baseball kept getting larger. Then it hit me.",
            "What's orange and sounds like a parrot? A carrot.",
            "I'm on a seafood diet. I see food and I eat it.",
            "Did you hear about the kidnapping at the playground? They woke up.",
"What do you call a bear with no teeth? A gummy bear.",
"How do you make a tissue dance? You put a little boogie in it.",
"Why did the bicycle fall over? Because it was two-tired.",
"How does a penguin build its house? Igloos it together.",
"Why don't oysters donate to charity? Because they are shellfish.",
"Did you hear about the guy who invented Lifesavers? He made a mint.",
"What do you call a cow with no legs? Ground beef.",


        ];

        const jokeElement = document.getElementById("joke");
        const prev1Button = document.getElementById("prev1");
        const next1Button = document.getElementById("next1");

        let currentIndex1 = 0;

        function displayJoke(index) {
            jokeElement.textContent = jokes[index];
        }

        displayJoke(currentIndex1);

        prev1Button.addEventListener("click", () => {
            if (currentIndex1 === 0) {
                currentIndex1 = jokes.length - 1;
            } else {
                currentIndex1--;
            }
            displayJoke(currentIndex1);
        });

        next1Button.addEventListener("click", () => {
            if (currentIndex1 === jokes.length - 1) {
                currentIndex1 = 0;
            } else {
                currentIndex1++;
            }
            displayJoke(currentIndex1);
        });




