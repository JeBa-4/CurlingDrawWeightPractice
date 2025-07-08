#!/bin/bash
# GCP Environment Setup Script for CurlingDrawWeightPractice

# Set project ID
PROJECT_ID=CURLING_DRAW_WEIGHT_PRACTICE
echo "Setting project ID to: $PROJECT_ID"

# Configure gcloud
gcloud config set project $PROJECT_ID
gcloud config set compute/region us-central1
gcloud config set compute/zone us-central1-a

# Enable required APIs
gcloud services enable container.googleapis.com
gcloud services enable cloudbuild.googleapis.com
gcloud services enable containerregistry.googleapis.com
gcloud services enable firestore.googleapis.com

# Create Firestore database
echo "Creating Firestore database..."
gcloud firestore databases create --region=us-central

# Create GKE cluster
echo "Creating GKE cluster..."
gcloud container clusters create curling-draw-weight-cluster \
  --zone us-central1-a \
  --num-nodes 3 \
  --machine-type e2-small

# Get cluster credentials
gcloud container clusters get-credentials curling-draw-weight-cluster --zone us-central1-a

# Update kubernetes.yaml
sed -i "s/YOUR_GCP_PROJECT_ID/$PROJECT_ID/g" setup/gcp/kubernetes.yaml

# Deploy to Kubernetes
kubectl apply -f setup/gcp/kubernetes.yaml

echo "GCP environment setup completed!"