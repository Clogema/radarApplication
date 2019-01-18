# Application Web pour le radar

## Vocabulaire

### Détection

Une détection représente un objet détecté

```json
{
  "x": "valeur",
  "y": "valeur",
  "peakValue": "valeur",
  "rangeIdx": "valeur",
  "dopplerIdx": "valeur"
}
```

### Paquet

Un paquet représente un ensemble d'objets détectés pour un timestamp donné *(500ms)*

- début du paquet : **sensorStart()**
- fin du paquet : **sensorStop()**

> Structure : [radar_paquet.json](/doc/radar_paquet.json)

### Séquence

Une séquence représente un ensemble de paquet

- début de la séquence : **START** envoyé par le client
- fin de la séquence : **STOP** envoyé par le client

> Structure : [radar_sequence.json](/doc/radar_sequence.json)

## Gestion des envoi et écriture des donnees radar

### Envoi des données

Le radar envoi les **paquets** en continu en **TCP** _(ou WebSocket)_

### Ecriture

On écrit les **séquences** dans un fichier lorsque le client envoi **START** et on stop l'écriture quand le client envoi **STOP**
