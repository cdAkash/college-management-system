FROM python:3.10.3-slim-bullseye

# Set the working directory inside the container
WORKDIR /python-model

# Update system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    cmake \
    gfortran \
    git \
    wget \
    curl \
    graphicsmagick \
    libgraphicsmagick1-dev \
    libatlas-base-dev \
    libavcodec-dev \
    libavformat-dev \
    libgtk2.0-dev \
    libjpeg-dev \
    liblapack-dev \
    libswscale-dev \
    pkg-config \
    python3-dev \
    python3-numpy \
    software-properties-common \
    zip \
    && apt-get clean && rm -rf /tmp/* /var/tmp/*



# Upgrade pip and setuptools to avoid deprecation warnings
RUN pip install --upgrade pip setuptools

# Clone and install dlib (specific version for compatibility)
RUN git clone -b 'v19.24' --single-branch https://github.com/davisking/dlib.git /tmp/dlib \
    && cd /tmp/dlib \
    && python setup.py install \
    && rm -rf /tmp/dlib

# Ensure that the current directory is correctly copied to the container
COPY ./python-model /python-model

# # Debug step: List the contents of /python-model to check if requirements.txt is there
# RUN ls -la /python-model

# # Install dependencies from requirements.txt and install the Python model
RUN pip install -r requirements.txt

CMD ["python", "face_verification.py"]

