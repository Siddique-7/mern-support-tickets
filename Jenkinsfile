pipeline {
    agent any

    stages {

        stage('Clean Workspace') {
            steps {
                deleteDir()
            }
        }

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir('backend') {
                    sh 'npm install --legacy-peer-deps'
                }
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir('frontend') {
                    sh 'npm install --legacy-peer-deps'
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

        stage('Build Docker Images') {
           steps {
             sh 'docker build -t mern-backend ./backend'
             sh 'docker build -t mern-frontend ./frontend'
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