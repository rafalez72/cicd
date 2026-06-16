// Pipeline de Integración y Entrega Continua (demo UTN).
// Etapas: Checkout -> Build -> Test -> Deploy. Feedback al final (verde/rojo).
pipeline {
  agent any

  environment {
    APP_VERSION = "${BUILD_NUMBER}"
    IMAGE       = "demo-ci:${BUILD_NUMBER}"
  }

  stages {
    stage('Checkout') {
      steps {
        echo 'Código obtenido desde Gitea (control de versiones).'
      }
    }

    stage('Build') {
      steps {
        echo 'Construyendo imagen Docker de la app...'
        sh 'docker build -t $IMAGE -t demo-ci:latest .'
      }
    }

    stage('Test') {
      steps {
        echo 'Ejecutando pruebas automatizadas...'
        sh 'docker run --rm $IMAGE node --test test/'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Desplegando en el entorno de entrega (puerto 8081)...'
        sh '''
          docker rm -f demo-ci-prod || true
          docker run -d --name demo-ci-prod \
            -p 8081:3000 \
            -e APP_VERSION=$APP_VERSION \
            demo-ci:latest
        '''
      }
    }
  }

  post {
    success { echo '✅ Pipeline OK — feedback VERDE al equipo. App en http://localhost:8081' }
    failure { echo '❌ Pipeline FALLÓ — feedback ROJO al equipo.' }
  }
}
