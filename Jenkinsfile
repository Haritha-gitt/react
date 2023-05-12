pipeline {
    agent any
    stages {
        stage('checkout'){
            steps{
                git 'https://github.com/Haritha-gitt/react.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
