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
    
    stage('Push to Docker Hub') {
    steps {
        script {
            withCredentials([usernamePassword(
                credentialsId: 'dockerhub-creds',
                usernameVariable: 'USER',
                passwordVariable: 'PASS'
            )]) {

                sh '''
                    echo $PASS | docker login -u $USER --password-stdin

                    docker tag mern-backend $USER/mern-support-tickets-backend:latest
                    docker tag mern-frontend $USER/mern-support-tickets-frontend:latest

                    docker push $USER/mern-support-tickets-backend:latest
                    docker push $USER/mern-support-tickets-frontend:latest
                '''
            }
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