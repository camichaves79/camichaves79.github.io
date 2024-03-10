# camichaves79.github.io

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Backend Developer Portfolio - Matrix Aesthetics</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        .matrix-font {
            font-family: 'Courier New', monospace;
            color: #0f0;
            background-color: #000;
        }

        .code-rain-animation {
            background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
            color: #0f0;
            background-color: #000;
            background-size: auto;
            animation: rain 10s infinite linear;
        }

        @keyframes rain {
            0% {background-position: 0 0;}
            100% {background-position: 100% 100%;}
        }
    </style>
</head>
<body class="matrix-font">

<div class="min-h-screen flex flex-col items-center justify-center code-rain-animation">
    <h1 class="text-5xl font-bold mb-2">John Doe</h1>
    <p class="text-lg mb-5">Backend Web Developer</p>
    <div class="text-center space-y-4">
        <p>Welcome to my digital realm. Here's a glimpse into my backend development universe.</p>
        <div>
            <a href="#projects" class="px-4 py-2 bg-green-700 hover:bg-green-800 transition-colors rounded">Projects</a>
            <a href="#contact" class="px-4 py-2 bg-green-700 hover:bg-green-800 transition-colors rounded">Contact</a>
        </div>
    </div>
</div>

<section id="projects" class="py-20">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Repeat this block for each project -->
            <div class="bg-gray-900 p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-bold mb-2">Project Name</h3>
                <p class="text-gray-300">Project description. An in-depth look at my work and the technologies I've harnessed.</p>
                <a href="#" class="inline-block mt-4 bg-green-600 hover:bg-green-700 transition-colors text-white py-2 px-4 rounded">View Project</a>
            </div>
            <!-- End of project block -->
        </div>
    </div>
</section>

<section id="contact" class="py-20 bg-gray-800 text-white">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Contact</h2>
        <form class="w-full max-w-lg mx-auto">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="name">
                        Name
                    </label>
                    <input class="appearance-none block w-full bg-gray-900 text-white border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-700" id="name" type="text">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="email">
                        Email
                    </label>
                    <input class="appearance-none block w-full bg-gray-900 text-white border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-700" id="email" type="email">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="message">
                        Message
                    </label>
                    <textarea class="appearance-none block w-full bg-gray-900 text-white border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-700" id="message" rows="5"></textarea>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3 text-center">
                    <button class="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded transition-colors" type="submit">Send Message</button>
                </div>
            </div>
        </form>
    </div>
</section>

</body>
</html>
