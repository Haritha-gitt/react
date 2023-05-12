pipeline {
    agent any
    stages {
        stage('checkout'){
            steps{
                git branch:'main',url:'https://github.com/Haritha-gitt/react.git'
            }
        }
        stage('install') {
            steps {
                bat 'npm install'
            }
        }
        stage('build') {
            steps {
                bat 'npm run build'
            }
        }
        stage('test') {
            steps {
                bat 'npm test'
            }
        }
    }
}
