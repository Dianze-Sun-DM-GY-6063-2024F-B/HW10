HW10A
Frequency Mapping:
The program divides the audio spectrum into three frequency ranges: low, mid, and high frequencies. The amplitude data of each range is mapped using map() to generate specific visual effects, such as the size, color, and position of rectangles. This ensures that different elements of the music (bass, mid-range, treble) trigger distinct visual responses.

Multi-Layered Circular Design:
The visualization is built around three circular layers corresponding to the frequency ranges:

Low-Frequency Circle: Located near the center, featuring fewer rectangles. The amplitude influences the size and color of the rectangles, emphasizing the bass rhythm.
Mid-Frequency Circle: Positioned in the middle layer, with a moderate number of rectangles and more dynamic range to represent mid-range sounds.
High-Frequency Circle: The outermost layer, containing the most rectangles with rapid changes. It uses bright colors and intricate details to reflect treble elements.
Dynamic Shapes and Colors:

Each circle consists of multiple rectangles whose angles, positions, sizes, and colors are dynamically generated based on spectrum data.
Polar coordinates (cos(angle) and sin(angle)) are used to calculate the position of each rectangle, while map() maps amplitude to the height and color of the rectangles.
These shapes respond to real-time changes in the spectrum, creating a rhythmic visual experience.
Rotational Dynamics:
Each circular layer rotates at different speeds, controlled by the variable r and implemented with rotate(). The low-frequency layer rotates slowly, while the high-frequency layer rotates faster. This creates a layered, rhythmically dynamic visual effect that aligns with the music's tempo and frequency.

Real-Time Updates and Rendering:
In the draw() function, spectrum data is updated frame by frame, and the visuals are redrawn in sync with the music. background(0) ensures the canvas is cleared each frame to prevent overlapping, maintaining a clean, smooth animation.

User Interaction:
The program includes a mousePressed() function that allows users to toggle music playback with a mouse click, adding an interactive element to the experience.

HW10B
Peak Analysis:

The program uses song.getPeaks() to extract an array of audio peaks (amplitude values) from the music file. These peaks represent the waveform of the song over time, capturing the dynamic changes in volume.
The number of peaks is scaled to fit the canvas width, allowing a detailed visual representation of the song's waveform.
Waveform Representation:

Each peak is represented as a vertical line. The height of the line corresponds to the peak's amplitude, mapped from -1 to 1 using map().
Lines are distributed horizontally across the canvas using map() to transform the peak index into the appropriate x-coordinate. This creates a timeline-like visual that stretches the song's waveform from left to right.
Dynamic Rotation:

Each line rotates around its origin based on the corresponding peak value, scaled by a rotationFactor (e.g., 90 degrees). Higher peaks result in greater rotation, adding a sense of movement to the otherwise static waveform.
The rotation introduces a creative, abstract interpretation of the waveform, enhancing the aesthetic experience.
Color Mapping:

The stroke color of each line is determined by the peak value. Negative peaks are darker, while positive peaks are lighter, mapped from 0 to 255. This grayscale effect provides a subtle gradient, highlighting the variation in amplitude across the waveform.
Static Layout:

Unlike animations, this program uses noLoop() to create a single, static frame of the waveform visualization. This approach focuses on presenting the song’s overall structure as an artistic snapshot rather than a dynamic display.
Typography:

The program adds a title at the top of the canvas, displaying the song's name and artist. This text is positioned centrally using textAlign(CENTER) and styled for clarity with fill(255) and a large font size.
Centered Composition:

By translating the origin to the center of the canvas, the visualization creates a balanced and symmetrical layout. This enhances the overall visual impact and makes the rotation of each line more visually cohesive