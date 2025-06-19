import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Modal, TouchableOpacity, Pressable } from 'react-native';
import Header from '@/components/Header';
import FeatureCard from '@/components/FeatureCard';
import { Heart, MessageCircle, BookOpen, ChartBar as BarChart3, Timer, X } from 'lucide-react-native';

export default function HomePage() {
  const [moodModalVisible, setMoodModalVisible] = useState(false);
  const [meditationModalVisible, setMeditationModalVisible] = useState(false);
  const [journalModalVisible, setJournalModalVisible] = useState(false);
  const [moodHistoryModalVisible, setMoodHistoryModalVisible] = useState(false);
  const [selectedMood, setSelectedMood] = useState<number | null>(null);

  const moodEmojis = ['😢', '😕', '😐', '😊', '😄'];
  const moodLabels = ['Very Bad', 'Bad', 'Okay', 'Good', 'Excellent'];

  const MoodTrackerModal = () => (
    <Modal
      visible={moodModalVisible}
      transparent
      animationType="slide"
      onRequestClose={() => setMoodModalVisible(false)}
    >
      <Pressable style={styles.modalOverlay} onPress={() => setMoodModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>How are you feeling today?</Text>
            <TouchableOpacity onPress={() => setMoodModalVisible(false)}>
              <X size={24} color="#8E8E93" />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.modalSubtitle}>Select your current mood</Text>
          
          <View style={styles.moodContainer}>
            {moodEmojis.map((emoji, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.moodButton,
                  selectedMood === index && styles.selectedMood
                ]}
                onPress={() => setSelectedMood(index)}
              >
                <Text style={styles.moodEmoji}>{emoji}</Text>
                <Text style={styles.moodLabel}>{moodLabels[index]}</Text>
              </TouchableOpacity>
            ))}
          </View>
          
          <TouchableOpacity 
            style={[styles.saveButton, selectedMood === null && styles.disabledButton]}
            disabled={selectedMood === null}
            onPress={() => {
              // Save mood logic here
              setMoodModalVisible(false);
              setSelectedMood(null);
            }}
          >
            <Text style={styles.saveButtonText}>Save Mood</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );

  const MeditationModal = () => (
    <Modal
      visible={meditationModalVisible}
      transparent
      animationType="slide"
      onRequestClose={() => setMeditationModalVisible(false)}
    >
      <Pressable style={styles.modalOverlay} onPress={() => setMeditationModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Meditation Guide</Text>
            <TouchableOpacity onPress={() => setMeditationModalVisible(false)}>
              <X size={24} color="#8E8E93" />
            </TouchableOpacity>
          </View>
          
          <View style={styles.meditationOptions}>
            <TouchableOpacity style={styles.meditationCard}>
              <Timer size={20} color="#7ED321" />
              <Text style={styles.meditationCardTitle}>5 Min Breathing</Text>
              <Text style={styles.meditationCardDesc}>Quick relaxation session</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.meditationCard}>
              <Timer size={20} color="#FF9500" />
              <Text style={styles.meditationCardTitle}>10 Min Mindfulness</Text>
              <Text style={styles.meditationCardDesc}>Focus and awareness practice</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.meditationCard}>
              <Timer size={20} color="#AF52DE" />
              <Text style={styles.meditationCardTitle}>15 Min Body Scan</Text>
              <Text style={styles.meditationCardDesc}>Full body relaxation</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    </Modal>
  );

  const JournalModal = () => (
    <Modal
      visible={journalModalVisible}
      transparent
      animationType="slide"
      onRequestClose={() => setJournalModalVisible(false)}
    >
      <Pressable style={styles.modalOverlay} onPress={() => setJournalModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Journal & Notes</Text>
            <TouchableOpacity onPress={() => setJournalModalVisible(false)}>
              <X size={24} color="#8E8E93" />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.modalSubtitle}>Your recent journal entries</Text>
          
          <View style={styles.journalEntries}>
            <View style={styles.journalEntry}>
              <Text style={styles.journalDate}>Today, 2:30 PM</Text>
              <Text style={styles.journalText}>Feeling grateful for the small moments today...</Text>
            </View>
            
            <View style={styles.journalEntry}>
              <Text style={styles.journalDate}>Yesterday, 6:45 PM</Text>
              <Text style={styles.journalText}>Had a challenging day but pushed through...</Text>
            </View>
          </View>
          
          <TouchableOpacity style={styles.addEntryButton}>
            <Text style={styles.addEntryText}>+ Add New Entry</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );

  const MoodHistoryModal = () => (
    <Modal
      visible={moodHistoryModalVisible}
      transparent
      animationType="slide"
      onRequestClose={() => setMoodHistoryModalVisible(false)}
    >
      <Pressable style={styles.modalOverlay} onPress={() => setMoodHistoryModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Mood History</Text>
            <TouchableOpacity onPress={() => setMoodHistoryModalVisible(false)}>
              <X size={24} color="#8E8E93" />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.modalSubtitle}>Your mood trends over time</Text>
          
          <View style={styles.moodHistory}>
            <View style={styles.moodHistoryItem}>
              <Text style={styles.historyDate}>Today</Text>
              <Text style={styles.historyMood}>😊 Good</Text>
            </View>
            
            <View style={styles.moodHistoryItem}>
              <Text style={styles.historyDate}>Yesterday</Text>
              <Text style={styles.historyMood}>😐 Okay</Text>
            </View>
            
            <View style={styles.moodHistoryItem}>
              <Text style={styles.historyDate}>2 days ago</Text>
              <Text style={styles.historyMood}>😄 Excellent</Text>
            </View>
            
            <View style={styles.moodHistoryItem}>
              <Text style={styles.historyDate}>3 days ago</Text>
              <Text style={styles.historyMood}>😕 Bad</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </Modal>
  );

  return (
    <View style={styles.container}>
      <Header />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Welcome back!</Text>
          <Text style={styles.welcomeSubtitle}>How can we help you feel better today?</Text>
        </View>

        <View style={styles.featuresSection}>
          <FeatureCard
            title="Mood Tracker"
            description="Track your emotions with our simple 1-5 scale rating system"
            icon={Heart}
            color="#FF6B6B"
            onPress={() => setMoodModalVisible(true)}
          />
          
          <FeatureCard
            title="Meditation Guide"
            description="Guided meditation sessions to help you relax and find inner peace"
            icon={Timer}
            color="#7ED321"
            onPress={() => setMeditationModalVisible(true)}
          />
          
          <FeatureCard
            title="Journal & Notes"
            description="Write down your thoughts and feelings in a private space"
            icon={BookOpen}
            color="#4A90E2"
            onPress={() => setJournalModalVisible(true)}
          />
          
          <FeatureCard
            title="Mood History"
            description="View your mood patterns and track your progress over time"
            icon={BarChart3}
            color="#AF52DE"
            onPress={() => setMoodHistoryModalVisible(true)}
          />
        </View>
      </ScrollView>

      <MoodTrackerModal />
      <MeditationModal />
      <JournalModal />
      <MoodHistoryModal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  welcomeSection: {
    paddingVertical: 24,
  },
  welcomeTitle: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#333333',
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#666666',
    lineHeight: 24,
  },
  featuresSection: {
    paddingBottom: 32,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  modalContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#333333',
  },
  modalSubtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#666666',
    marginBottom: 24,
    textAlign: 'center',
  },
  moodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  moodButton: {
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    minWidth: 60,
  },
  selectedMood: {
    backgroundColor: '#E8F4FD',
    borderWidth: 2,
    borderColor: '#4A90E2',
  },
  moodEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  moodLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#666666',
    textAlign: 'center',
  },
  saveButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#CCCCCC',
  },
  saveButtonText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
  },
  meditationOptions: {
    gap: 16,
  },
  meditationCard: {
    backgroundColor: '#F8F9FA',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  meditationCardTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#333333',
    flex: 1,
  },
  meditationCardDesc: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#666666',
    flex: 2,
  },
  journalEntries: {
    gap: 16,
    marginBottom: 24,
  },
  journalEntry: {
    backgroundColor: '#F8F9FA',
    padding: 16,
    borderRadius: 12,
  },
  journalDate: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#666666',
    marginBottom: 8,
  },
  journalText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#333333',
    lineHeight: 20,
  },
  addEntryButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  addEntryText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
  },
  moodHistory: {
    gap: 12,
  },
  moodHistoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    padding: 16,
    borderRadius: 12,
  },
  historyDate: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#666666',
  },
  historyMood: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#333333',
  },
});