pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm run build'
                }
            }
        }

        stage('Backend Test (optional)') {
            steps {
                dir('backend') {
                    sh 'echo "No tests yet - add later"'
                }
            }
        }
    }

    post {
        success {
            echo 'Build successful 🚀'
        }
        failure {
            echo 'Build failed ❌'
        }
    }
}
