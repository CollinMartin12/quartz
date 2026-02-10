**Dense Neural Networks**, also known as **Multi-Layer Perceptrons (MLPs)**, are a fundamental building block of deep learning. They are described as a hierarchical composition of simple mathematical functions that allow computers to extract patterns from data without being explicitly programmed.

### Limitations of Linear Models
Monotonicity - Note that we can easily come up with examples that violate monotonicity. Say for example that we want to predict health as a function of body temperature. For individuals with a normal body temperature above 37°C (98.6°F), higher temperatures indicate greater risk. However, if the body temperatures drops below 37°C, lower temperatures indicate greater risk! Again, we might resolve the problem with some clever preprocessing, such as using the distance from 37°C as a feature.

**While there might exist a representation of our data that would take into account the relevant interactions among our features, on top of which a linear model would be suitable, we simply do not know how to calculate it by hand. With deep neural networks, we used observational data to jointly learn both a representation via hidden layers and a linear predictor that acts upon that representation**

### What happens inside a Hidden Layer?

Each neuron in a hidden layer performs a two-step mathematical transformation on the information it receives from the previous layer:

- **Linear Transformation:** It calculates a weighted sum of all its inputs and adds a "bias" term.
    
- **Non-linear Activation:** It passes that sum through an **activation function** (like ReLU, Sigmoid, or Tanh).
    
**Without these hidden layers, the Network we are training would be simple. This would be a simple linear model.**
Example of Hidden Layer:
![[Pasted image 20260210101934.png]]

### Activation Function
In order to realize the potential of multilayer architectures, we need one more key ingredient: a nonlinear _activation function_  to be applied to each hidden unit following the affine transformation.
Example of Activation Function sigma:
![[Pasted image 20260210101920.png]]

#### ReLu Function (Rectified Linear Unit)
Given an element x, the function is defined as the maximum of that element and 0:
![[Pasted image 20260210102224.png]]
Informally, the ReLU function retains only positive elements and discards all negative elements by setting the corresponding activations to 0.

#### Sigmoid Function
The _sigmoid function_ transforms those inputs whose values lie in the domain , to outputs that lie on the interval (0, 1). For that reason, the sigmoid is often called a _squashing function_: it squashes any input in the range (-inf, inf) to some value in the range (0, 1):
![[Pasted image 20260210102455.png]]
![[Pasted image 20260210102544.png]]

#### Tanh Function
Like the sigmoid function, the tanh (hyperbolic tangent) function also squashes its inputs, transforming them into elements on the interval between  -1 and 1:
![[Pasted image 20260210102623.png]]
### 2. How Information Flows: Weights and Biases

In a dense layer, information moves from one node to the next through connections that have **weights ($W$)** and **biases ($w_0$)**.

- **Weights:** Determine the strength or importance of a signal from a previous neuron.
    
- **Biases:** An additional parameter that helps the network adjust its output independently of the input.
    

**Analogy: The Sound Mixer**

> Imagine each neuron is listening to several "speakers" (neurons from the previous layer). The **weights** are like volume knobs for each speaker—the neuron can choose to "turn up" the signals it finds important and "mute" the ones it doesn't. The **bias** is like a master volume offset that shifts the total signal up or down.

### 3. The Activation Function: The Gatekeeper

After the weights and biases are applied, the result is passed through an **activation function**. Its primary purpose is to introduce "non-linearity" into the network, allowing it to learn complex patterns that aren't just straight lines. Common examples include:

- **Sigmoid:** Squashes values between 0 and 1.
    
- **ReLU (Rectified Linear Unit):** Only allows positive signals to pass through, effectively "turning off" negative ones.
    
- **Hyperbolic Tangent (tanh):** Squashes values between -1 and 1.
    

**Analogy: The Decision Switch**

> The activation function acts like a light switch or a gatekeeper. Even if a neuron receives a lot of input, the activation function decides if that signal is "strong enough" to be passed on to the next layer. Without this, the entire network would just be doing simple addition and could never solve complex problems.

### 4. Training: Learning from Mistakes

Training a network is the process of finding the best weights and biases to minimize error. This involves two key concepts:

- **Loss Function:** This measures how far the network's prediction is from the actual truth. For example, **Cross Entropy** is often used for classification tasks.
    
- **Backpropagation:** This is an efficient way to calculate how to change each weight to reduce the error. It works backward from the output layer to the input layer, "reusing" computations to save time.
    
- **Gradient Descent:** The algorithm that actually updates the weights based on the information from backpropagation.
    

**Analogy: Finding the Valley in a Fog**

> Imagine you are standing on a mountain in a thick fog and want to find the lowest point (the minimum loss). You can't see the bottom, but you can feel the slope of the ground under your feet. **Gradient Descent** is the act of taking a small step in the direction where the ground slopes downward. **Backpropagation** is like a team of people behind you, communicating exactly how each part of your gear (your weights) needs to be adjusted so you can feel that slope more accurately.

### 5. Regularization: Preventing "Memorization"

A major challenge is **overfitting**, where the network simply "memorizes" the training data instead of learning general patterns. Techniques to prevent this include:

- **Dropout:** Randomly "turning off" some neurons during training. This forces the network not to rely too heavily on any single connection.
    
- **Early Stopping:** Stopping the training process as soon as the network's performance on a separate "validation" set starts to get worse.
    
- **L1/L2 Regularization:** Adding a penalty for having weights that are too large, which encourages a simpler model.
    

**Analogy: The Missing Team Player**

> **Dropout** is like a basketball team that practices with one random player sitting on the bench during every drill. This prevents the team from becoming over-reliant on a single "star" player and ensures that every member of the team knows how to play their part effectively.


# Mathematical Structure of Neural Nets
### 1. The Forward Pass: Weights and Linear Algebra

Each layer in a dense network performs a linear transformation followed by a non-linear one. For a simple two-layer network, the math for the prediction ($\hat{y}$) looks like this:

$$\hat{y} = g^{(2)}(W^{(2)}g^{(1)}(W^{(1)}x + w_0^{(1)}) + w_0^{(2)})$$

- **$x$**: Your input data (like pixels).
    
- **$W$**: The **weights** (a matrix of numbers) that multiply the inputs.
    
- **$w_0$**: The **bias** term added to the result.
    
- **$g(\cdot)$**: The **activation function**.
    

**Analogy: The Recipe for a Sauce**

> Think of $x$ as your raw ingredients (salt, sugar, spice). The **weights ($W$)** are the specific amounts of each ingredient you choose to include. The **bias ($w_0$)** is like a "base" flavor (like water or stock) that is always present. The result of $Wx + w_0$ is the raw mixture before you taste-test it and decide if it's "good enough" to serve—which is what the activation function $g(\cdot)$ decides.

---

### 2. The Activation Functions: Adding Non-Linearity

The purpose of these functions is to introduce non-linearity so the network can learn complex patterns. The document highlights three main types:

- **Sigmoid**: $g(z) = \frac{1}{1+e^{-z}}$. It squashes values between 0 and 1. Its derivative is $g'(z) = g(z)(1-g(z))$.
    
- **Hyperbolic Tangent (tanh)**: $g(z) = \frac{e^{z}-e^{-z}}{e^{z}+e^{-z}}$. It squashes values between -1 and 1.
    
- **ReLU (Rectified Linear Unit)**: $g(z) = \max(0,z)$. It returns 0 for negative inputs and the input itself for positive ones. Its derivative is simple: 1 if $z > 0$, else 0.
    

**Analogy: The Dimmer Switch vs. the Gate**

> **Sigmoid** is like a dimmer switch; it can be fully off (0), fully on (1), or anywhere in between. **ReLU** is like a security gate: if the signal is negative ("you don't belong here"), it's blocked completely (0); if it's positive, it passes through exactly as it is.

---

### 3. Measuring Error: The Loss Function

The network needs a way to quantify its mistakes. This is the **Empirical Loss ($J$)**, which is the average of the individual losses ($\mathcal{L}$) over $N$ training examples:

$$J(W) = \frac{1}{N} \sum_{n=1}^N \mathcal{L}(\hat{y}^{(n)}, y^{(n)})$$

- **Regression (Squared Loss)**: $\mathcal{L}(\hat{y}, y) = ||y - \hat{y}||^2$.
    
- **Classification (Cross Entropy)**: Uses the **Softmax** function to turn raw outputs into probabilities: $\hat{y}_k = \frac{e^{z_k}}{\sum_j e^{z_j}}$. The loss then penalizes how far the predicted probability is from the true class.
    

---

### 4. Learning: Backpropagation and Gradient Descent

To train the network, we find the weights ($W^*$) that minimize the loss ($J$):

$$W^* = \arg \min_W J(W)$$

We do this by moving the weights in the opposite direction of the gradient:

$$W \leftarrow W - \eta \frac{\partial J}{\partial W}$$

**Backpropagation** is the efficient way we calculate these derivatives ($\frac{\partial J}{\partial W}$) using the **Chain Rule**. We calculate an "error term" ($\delta$) at the output and ripple it backward through the layers.

- **Output error ($\delta_i$)**: Measures how much a specific neuron contributed to the total mistake.
    
- **Gradient update**: The change for a weight is its local error ($\delta$) multiplied by the signal coming from the previous layer ($g(z)$).
    

**Analogy: The Chain of Blame**

> Imagine a company makes a bad product. To fix it, you start at the final inspection (output layer) and find the error. You then work backward to find which department (hidden layer) made the mistake and which specific worker (neuron) within that department was responsible. You then "adjust" that worker's behavior (update the weight) so the mistake doesn't happen again.

---

### 5. Regularization: Penalizing Complexity

To prevent overfitting, we add a mathematical penalty to the loss function that discourages weights from getting too large.

- **L2 Regularization**: Adds the squared sum of all weights to the loss:
    
    $$J(W) = \text{Original Loss} + \frac{\lambda}{N} \sum ||w||^2$$
    
- **Dropout**: Randomly sets 50% of the activations to 0 during training, forcing the network to learn redundant, robust patterns.
    

**Analogy: The Heavy Backpack**

> **L2 Regularization** is like telling the network it can solve the problem, but it has to carry a heavy backpack proportional to the size of its weights. This forces the network to only use the "strongest" and most necessary weights to get the job done, leaving the "lazy" or redundant weights at zero.