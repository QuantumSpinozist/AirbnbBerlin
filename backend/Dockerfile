# Use the official Debian Slim base image
FROM debian:bullseye-slim

# Set environment variables (optional)
ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8

# Update the package list and install necessary packages
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    python3 \
    python3-pip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Create a directory for your application code (optional)
WORKDIR /app

# Copy your Python application files to the container (assuming you have local files to copy)
COPY . /app

# Copy your requirements.txt into the container
COPY requirements.txt /app

# Install Python packages from requirements.txt
RUN pip3 install --no-cache-dir -r requirements.txt

CMD ["python3", "main.py"]