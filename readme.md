# Simple demo for deploying a node app using k8s with kustomize

## Viewing Kustomize Configs - (Using kubectl kustomize integration)

```
kubectl kustomize .
kubectl kustomize k8s/overlays/dev
kubectl kustomize k8s/overlays/prod
```

## Applying Kustomize Configs - (Using kubectl kustomize integration)

```
kubectl apply -k .
kubectl apply -k k8s/overlays/dev
kubectl apply -k k8s/overlays/prod
```

## Creating Namespaces if you dont have them already

```
kubectl create namespace <namespace>
```
