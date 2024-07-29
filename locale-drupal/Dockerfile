FROM drupal:10

# Install packages
RUN apt-get update && apt-get install --no-install-recommends -y \
    curl \
    wget \
    vim \
    git \
    unzip && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Add Composer's global bin directory to PATH
ENV PATH="$PATH:/root/.composer/vendor/bin"

# Install dependencies
RUN composer install

# Clean up
RUN apt-get clean && rm -rf /var/lib/apt/lists/*